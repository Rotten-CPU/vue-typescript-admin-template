import { Component, Vue } from 'vue-property-decorator'
import {ECharts} from "echarts";

@Component({
  name: 'ooList'
})
export default class extends Vue {
  protected list_loading: Boolean =  false
  protected listData: Array<any> = []

  mounted() {
    this.ooGetList()
  }

  protected ooGetList() {
  //  pass
    console.log('123')
  }
}
