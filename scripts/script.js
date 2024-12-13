document.addEventListener('DOMContentLoaded', () => {
    console.log('Script Status: LOADED!');

    const avatar = document.getElementById('avatar');
    avatar.addEventListener('click', () => {
        alert('print("Hello, world!")');
        console.log(';)');
    });
});
