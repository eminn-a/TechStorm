export async function latestNews() {
  try {
    let res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=395c610dc24d4b008e37c174df95497b`
    );
    let data = await res.json();
    let only3Articles = data.articles.slice(0, 3);
    return only3Articles;
  } catch (error) {
    console.log(error.message);
  }
}
