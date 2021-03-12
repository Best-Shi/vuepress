class Dialog {
    element: HTMLElement
    btn: HTMLElement
    msg: HTMLElement
    constructor() {
        this.element = document.getElementById('dialog')!
        this.btn = document.getElementById('btn')!
        this.msg = document.getElementById('msg')!
    }

    show(msg: string) {
        this.msg.innerHTML = msg
        this.element.style.display = 'block'
        this.btn.addEventListener('click', function () {
            location.reload();
        })
    }
}

export default Dialog