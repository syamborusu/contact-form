document.getElementById('postButton').addEventListener('click', function () {
    const postInput = document.getElementById('postInput').value;
    if (postInput.trim() !== '') {
      const feedSection = document.querySelector('.feed-section');
      const newPost = document.createElement('div');
      newPost.classList.add('post');
      newPost.innerHTML = `
        <h3>User123</h3>
        <p>${postInput}</p>
      `;
      feedSection.prepend(newPost);
      document.getElementById('postInput').value = '';
    }
  });