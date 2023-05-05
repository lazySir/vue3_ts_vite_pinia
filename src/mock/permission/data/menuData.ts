import { reactive } from 'vue'
import { asyncRoutes } from '@/router/asyncRoutes'
import { transformMenuData } from '@/hooks/transformMenuData'
const newMenu = transformMenuData(asyncRoutes);
export let menuData = reactive(newMenu);
