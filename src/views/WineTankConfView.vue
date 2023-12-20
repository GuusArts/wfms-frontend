<!-- YourParentComponent.vue -->
<template>
  <div>
    <button @click="openWorkOrderModal()">Open Work Order Modal</button>
    <work-order-modal ref="workOrderModal"></work-order-modal>
  </div>
</template>

<script>
import WorkOrderModal from '../components/WorkOrdersModalComp.vue';

export default {
  components: {
    WorkOrderModal,
  },
  mounted(){
    console.log("workerordelmodal is mounted")
  },
  methods: {
    openWorkOrderModal() {
      // Make sure that the component is mounted before trying to access it
      if (this.$refs.workOrderModal) {
        console.log("hellod")
        this.$refs.workOrderModal.openModal();
      }
    },
  },
};
</script>
