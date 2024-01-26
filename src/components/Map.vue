<template>
    <baidu-map
     class="bm-view"
     :center="{lng:119.340,lat:34.775044}"
     :zoom="13"
    >
    
     <bm-marker style="z-index: 99999 !important;" :position="{lng: 119.373816, lat: 34.762594}" :icon="{url: '/images/icon/heart.png', size: {width: 32, height: 32}}" :dragging="false" animation="BMAP_ANIMATION_BOUNCE">
      <bm-label content="I'm here" :labelStyle="{color: 'red', fontSize : '12px'}" :offset="{width: -8, height: 25}"/>
    </bm-marker>
    </baidu-map>
  </template>
  
  <script setup>
  
  onMounted(() => {
    
  });
  </script>
  
  <style lang="scss" scoped>
  .bm-view {
    width: 100%; height:100%;
  }
  </style>
  