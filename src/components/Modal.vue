<script setup>
defineProps({
    show: Boolean
});
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <header>
                    <slot name="header">Default Header</slot>
                </header>
                <div>
                    <slot>Default Main Text</slot>
                </div>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button @click="$emit('close')">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: grid;
    place-items: center;
}
.modal-container {
    background: white;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}
.modal-footer {
    border-top: 1px solid #ddd;
    margin-top: 1rem;
    padding-top: 0.5rem;
    font-size: 0.8rem;
}
.modal-footer button {
    background: #ddd;
    padding: 0.25rem 0.75rem;
    border-radius: 20px;
}
.modal-footer button:hover {
    background: #c8c8c8;
}
.modal-enter-active {
    transition: opacity 0.3s;
}
.modal-leave-active {
    transition: opacity 0.15s;
}
.modal-enter-from, .modal-leave-to {
    opacity: 0;
}
.modal-enter-to, .modal-leave-from {
    opacity: 1;
}
</style>