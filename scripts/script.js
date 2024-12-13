document.addEventListener('DOMContentLoaded', () => {
    console.log('[FEDOTOV.DEV] Script status: LOADED!');

    const avatar = document.getElementById('avatar');
    avatar.addEventListener('click', () => {
        alert('print("Hello, world!")');
        console.log(';)');
    });
});
