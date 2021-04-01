import { onBeforeUnmount, onMounted, ref } from "vue";

export default function () {
    const x = ref(0);
    const y = ref(0);
    const handlerClick = (e: MouseEvent) => {
        x.value = e.pageX;
        y.value = e.pageY;
    };
    onMounted(() => {
        window.addEventListener("click", handlerClick);
    });
    onBeforeUnmount(() => {
        window.removeEventListener('click', handlerClick)
    })
    return {
        x,
        y,
    };
}