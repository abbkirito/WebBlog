<template>
  <div class="home">
    <div class="container">
      <div class="hero-section">
        <h1>欢迎来到技术论坛</h1>
        <p class="subtitle">分享技术，交流思想，共同进步</p>
        <div class="actions">
          <el-button type="primary" size="large" @click="goToCreatePost" v-if="authStore.isAuthenticated">
            <el-icon><Plus /></el-icon>
            发布新帖
          </el-button>
          <el-button size="large" @click="$router.push('/login')" v-else>
            立即登录
          </el-button>
        </div>
      </div>
      
      <div class="features">
        <el-row :gutter="24">
          <el-col :xs="24" :sm="12" :md="8">
            <div class="feature-card">
              <el-icon size="48" color="var(--primary-color)"><ChatDotRound /></el-icon>
              <h3>技术讨论</h3>
              <p>与开发者交流最新技术动态</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="feature-card">
              <el-icon size="48" color="var(--success-color)"><Share /></el-icon>
              <h3>知识分享</h3>
              <p>分享你的学习心得和经验</p>
            </div>
          </el-col>
          <el-col :xs="24" :sm="12" :md="8">
            <div class="feature-card">
              <el-icon size="48" color="var(--warning-color)"><QuestionFilled /></el-icon>
              <h3>问答互助</h3>
              <p>解决开发中遇到的各种问题</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { Plus, ChatDotRound, Share, QuestionFilled } from '@element-plus/icons-vue'

const router = useRouter()
const authStore = useAuthStore()

const goToCreatePost = () => {
  router.push('/post/create')
}
</script>

<style scoped>
.home {
  min-height: calc(100vh - 120px);
  padding: var(--spacing-xl) 0;
}

.hero-section {
  text-align: center;
  padding: var(--spacing-xl) 0;
  margin-bottom: var(--spacing-xl);
}

.hero-section h1 {
  font-size: 3rem;
  margin-bottom: var(--spacing-md);
  color: var(--text-primary);
}

.subtitle {
  font-size: 1.25rem;
  color: var(--text-regular);
  margin-bottom: var(--spacing-lg);
}

.actions {
  margin-top: var(--spacing-lg);
}

.features {
  margin-top: var(--spacing-xl);
}

.feature-card {
  background: white;
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  text-align: center;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  height: 100%;
  transition: transform 0.3s, box-shadow 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
}

.feature-card h3 {
  margin: var(--spacing-md) 0;
  color: var(--text-primary);
}

.feature-card p {
  color: var(--text-regular);
}
</style>