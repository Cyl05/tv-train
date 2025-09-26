test("check promises", () => {
    return fetch("https://api.jikan.moe/v4/anime?type=movie")
        .then(data => data.json())
        .then(data => JSON.stringify(data))
        .then(data => {
            expect(data).toMatch(/myanimelist/)
        });
});

test("checking async await", async () => {
    const response = await fetch("https://api.jikan.moe/v4/anime?type=movie");
    const responseJSON = await response.json();
    expect(responseJSON.data[0].titles[0].title).toMatch(/Cowboy Bebop: Tengoku no Tobira/);
});

function fetchData(callback) {
    setTimeout(() => {
        callback(null, 'peanut butter');
    }, 1000);
}

test('callback', () => {
  function callback(error, data) {
    if (error) {
      throw error;
    }
    expect(data).toBe('peanut butter');
  }

  fetchData(callback);
});