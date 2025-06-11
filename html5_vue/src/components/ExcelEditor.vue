<template>
  <div>
    <h2>📄 Excel / JSON 編輯器</h2>
    <input type="file" @change="handleFileUpload" accept=".xlsx, .xls, .csv" />

    <div v-if="sheetNames.length">
      <label>選擇工作表：</label>
      <select v-model="selectedSheet" @change="updateSheetData">
        <option v-for="sheet in sheetNames" :key="sheet" :value="sheet">{{ sheet }}</option>
      </select>
    </div>

    <div v-if="jsonData.length">
      <div style="margin: 10px 0;">
        <button @click="saveToLocalStorage">儲存到 localStorage</button>
        <button @click="clearLocalStorage"> 清除 localStorage</button>
        <button @click="downloadJSON"> 下載 JSON</button>
        <button @click="exportToExcel"> 匯出 Excel</button>
        <button @click="saveEdits">✅ 儲存編輯</button>
      </div>

      <h3>編輯表格</h3>
      <table border="1" cellpadding="5" style="border-collapse: collapse; width: 100%;">
        <thead>
          <tr>
            <th v-for="(val, key) in jsonData[0]" :key="key">{{ key }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, rowIndex) in jsonData" :key="rowIndex">
            <td v-for="(val, key) in row" :key="key">
              <input
                v-model="editableData[rowIndex][key]"
                style="width: 100%; border: none;"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import * as XLSX from 'xlsx'
import { ref, watch, onMounted } from 'vue'

const jsonData = ref([])
const editableData = ref([])
const allWorksheets = ref({})
const sheetNames = ref([])
const selectedSheet = ref('')
const LOCAL_KEY = 'excelData'

function getExtension(fileName) {
  return fileName.split('.').pop().toLowerCase()
}

function handleFileUpload(event) {
  const file = event.target.files[0]
  const ext = getExtension(file.name)
  const reader = new FileReader()

  if (ext === 'csv') {
    reader.onload = (e) => {
      const text = e.target.result
      const workbook = XLSX.read(text, { type: 'string', codepage: 65001 })
      processWorkbook(workbook)
    }
    reader.readAsText(file, 'utf-8')
  } else {
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result)
      const workbook = XLSX.read(data, { type: 'array' })
      processWorkbook(workbook)
    }
    reader.readAsArrayBuffer(file)
  }
}

function processWorkbook(workbook) {
  sheetNames.value = workbook.SheetNames
  allWorksheets.value = {}
  workbook.SheetNames.forEach(sheetName => {
    const worksheet = workbook.Sheets[sheetName]
    allWorksheets.value[sheetName] = XLSX.utils.sheet_to_json(worksheet)
  })
  selectedSheet.value = sheetNames.value[0]
  updateSheetData()
}

function updateSheetData() {
  const data = allWorksheets.value[selectedSheet.value] || []
  jsonData.value = JSON.parse(JSON.stringify(data)) // 原始資料
  editableData.value = JSON.parse(JSON.stringify(data)) // 編輯用
}

// 編輯儲存
function saveEdits() {
  jsonData.value = JSON.parse(JSON.stringify(editableData.value))
  allWorksheets.value[selectedSheet.value] = jsonData.value
  alert('✅ 編輯內容已更新')
}

// localStorage 功能
function saveToLocalStorage() {
  const saved = {
    allWorksheets: allWorksheets.value,
    selectedSheet: selectedSheet.value,
    sheetNames: sheetNames.value,
  }
  localStorage.setItem(LOCAL_KEY, JSON.stringify(saved))
  alert('✅ 資料已儲存到 localStorage')
}

function clearLocalStorage() {
  localStorage.removeItem(LOCAL_KEY)
  jsonData.value = []
  editableData.value = []
  allWorksheets.value = {}
  sheetNames.value = []
  selectedSheet.value = ''
  alert(' localStorage 已清除')
}

// JSON 下載
function downloadJSON() {
  const blob = new Blob([JSON.stringify(jsonData.value, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${selectedSheet.value || 'data'}.json`
  a.click()
  URL.revokeObjectURL(url)
}

// 匯出為 Excel
function exportToExcel() {
  const worksheet = XLSX.utils.json_to_sheet(jsonData.value)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, selectedSheet.value || 'Sheet1')

  XLSX.writeFile(workbook, `${selectedSheet.value || 'data'}.xlsx`)
}

// 載入 localStorage
onMounted(() => {
  const saved = localStorage.getItem(LOCAL_KEY)
  if (saved) {
    try {
      const parsed = JSON.parse(saved)
      sheetNames.value = parsed.sheetNames || []
      allWorksheets.value = parsed.allWorksheets || {}
      selectedSheet.value = parsed.selectedSheet || ''
      updateSheetData()
    } catch (e) {
      console.error(' localStorage 解析錯誤', e)
    }
  }
})
</script>

<style scoped>
input[type="file"] {
  margin-bottom: 20px;
}
button {
  margin: 5px;
  padding: 8px 12px;
}
input[type="text"], input {
  font-family: inherit;
  font-size: 14px;
}
</style>
