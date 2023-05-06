import { reactive } from 'vue'
import { asyncRoutes } from '@/router/asyncRoutes'
import { transformMenuData } from '@/mock/permission/tools/menuTools'
const newMenu = transformMenuData(asyncRoutes);
export let menuData = reactive(newMenu);
