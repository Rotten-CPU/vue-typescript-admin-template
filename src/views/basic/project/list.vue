<template>
  <div class="container">
    <el-card class="table-box">
      <el-table
        :data="listData"
        border
        highlight-current-row
      >
        <el-table-column
          label="序"
          align="center"
          width="50"
          type="index"
        />
        <el-table-column
          v-for="(v ,i) in props"
          :key="i"
          :prop="v.prop"
          :label="v.label"
          align="center"
        />
      </el-table>
    </el-card>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator'
import { getProjectList } from '@/api/basic'
import { mixins } from 'vue-class-component'
import ooList from '@/mixins/list'

  @Component({
    name: 'Lists'
  })
export default class extends mixins(ooList) {
      private props: Array<any> = [
        {
          prop: 'name',
          label: '项目名称'
        },
        {
          prop: 'propertyName',
          label: '工程类型'
        },
        {
          prop: 'province',
          label: '详细地址'
        }
      ]

      protected async ooGetList() {
        const _data = {
          pageNum: 1,
          pageSize: 5
        }
        try {
          const res = await getProjectList(_data)
          console.log(res)
          this.listData = res.data.data.page.list
        } catch (err) {
          // pass
        }
      }
}
</script>
