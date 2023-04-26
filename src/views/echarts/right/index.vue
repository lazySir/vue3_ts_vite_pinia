<template>
  <div>
    <!-- 上部 -->
    <topComponent></topComponent>
    <!-- 中部 -->
    <centerComponent :lineData='this.lineData'></centerComponent>
    <!-- 下部 -->
    <bottomComponent :pieData='this.pieData' :barData='this.barData'></bottomComponent>
  </div>
</template>

<script>
import topComponent from './top'
import centerComponent from './center'
import bottomComponent from './bottom'
import { mapActions,mapState} from 'vuex'
export default {
  mounted() {
    this.getMockData()
  },
  methods:{
    ...mapActions('Home',['getMockData'])
  },
  computed:{
    ...mapState('Home',['lineData','barData','pieData']),
  },
  components: {
    topComponent,
    centerComponent,
    bottomComponent
  },
}
</script>

<style scoped></style>
