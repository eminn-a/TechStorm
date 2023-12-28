export async function latestNews(number) {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=395c610dc24d4b008e37c174df95497b`
    );
    let data = await res.json();
    let articles = data.articles.slice(0, number);
    return articles;
  } catch (error) {
    console.log(error.message);
  }
}
