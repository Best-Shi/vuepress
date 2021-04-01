import { ref } from 'vue'

import axios from 'axios'

export default function useRequest<T>(url: string) {
    const loading = ref(true)
    const result = ref<T | null>(null)
    const errMsg = ref(null)

    axios.get(url).then(res => {
        setTimeout(() => {
            loading.value = false
            result.value = res.data
        }, 2000);
    }).catch(err => {
        loading.value = false
        errMsg.value = err.message || '未知错误'
    })


    return {
        loading,
        result, errMsg
    }
}