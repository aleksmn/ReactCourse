function Page() {
  const JSX = (
    <main className="main">
      <h3>Добро пожаловать в мой блог!</h3>
      <ul>
        {/* Список постов */}
        <li>1. Как заработать миллион</li>
        <li>2. Как спрятать миллион</li>
        <li>3. Как найти миллион</li>

      </ul>
    </main>
  );
  return JSX;
}
export default Page;