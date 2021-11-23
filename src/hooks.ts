import { computed, getCurrentInstance, onBeforeUnmount, ref } from '@vue/composition-api';

export function useRoute() {
    const vm = getCurrentInstance();

    if (!vm) {
        throw new ReferenceError('Not found vue instance.');
    }

    const route = ref(vm.proxy.$route);

    const router = vm.proxy.$router;

    const removeHook = router.afterEach((to) => {
        route.value = to;
    });

    onBeforeUnmount(() => {
        removeHook();
    });

    return computed(() => route.value);
}
