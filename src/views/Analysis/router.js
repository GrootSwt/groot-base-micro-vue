import Living from '@/views/Analysis/Living'
import Time from '@/views/Analysis/Time'

export default {
  path: 'analysis',
  name: 'Analysis',
  component: { render: (e) => e('router-view') },
  redirect: Living,
  children: [
    {
      path: 'living',
      name: 'AnalysisLiving',
      component: Living,
      meta: {
        title: '活跃分析',
        breadcrumb: ['主页', '统计分析', '活跃分析'],
        auth: true
      }
    },
    {
      path: 'time',
      name: 'AnalysisTime',
      component: Time,
      meta: {
        title: '时段分析',
        breadcrumb: ['主页', '统计分析', '时段分析'],
        auth: true
      }
    }
  ]
}
