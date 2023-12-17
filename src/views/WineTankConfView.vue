<template>
  <div>
  <button @click="openWorkOrderModal">open</button>
  <work-orders-modal ref="workOrderModal"> </work-orders-modal>
  </div>
</template>

<script>
import WorkOrdersModal from '../components/WorkOrdersModalComp.vue'
export default {
components:{
  WorkOrdersModal
},
methods: {
    openWorkOrderModal() {
      this.$refs.workOrderModal.openModal();
    },
  },
}
</script>

<style>

</style>