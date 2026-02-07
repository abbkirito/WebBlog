<template>
  <div class="not-found">
    <div class="container">
      <div class="error-content">
        <el-icon size="120" color="#909399"><CircleCloseFilled /></el-icon>
        <h1>404</h1>
        <p class="description">抱歉，您访问的页面不存在</p>
        <div class="actions">
          <el-button type="primary" @click="$router.push('/')">返回首页</el-button>
          <el-button @click="$router.go(-1)">返回上一页</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleCloseFilled } from '@element-plus/icons-vue'
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.error-content {
  text-align: center;
  padding: 60px 20px;
}

.error-content h1 {
  font-size: 72px;
  margin: 20px 0;
  color: #303133;
}

.description {
  font-size: 18px;
  color: #606266;
  margin-bottom: 30px;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
}
</style>