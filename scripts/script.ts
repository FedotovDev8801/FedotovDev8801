const avatar = document.getElementById('avatar') as HTMLImageElement | null;
const gamesSection = document.getElementById('games') as HTMLElement;

function showGreeting(): void {
    alert('print("Hello, world!")');
}

if (avatar) {
    avatar.addEventListener('click', showGreeting);
}
