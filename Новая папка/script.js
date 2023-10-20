document.addEventListener('DOMContentLoaded', function () {
    const commentForm = document.getElementById('comment-form');
    const commentsContainer = document.getElementById('comments');

    // Отримуємо збережені коментарі з Local Storage
    const savedComments = JSON.parse(localStorage.getItem('comments')) || [];

    // Відновлюємо коментарі з Local Storage
    savedComments.forEach(function (commentData) {
        const commentDiv = createCommentElement(commentData.name, commentData.comment);
        commentsContainer.appendChild(commentDiv);
    });

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        const name = nameInput.value;
        const comment = commentInput.value;

        if (name && comment) {
            // Зберігаємо коментар в Local Storage
            savedComments.push({ name, comment });
            localStorage.setItem('comments', JSON.stringify(savedComments));

            const commentDiv = createCommentElement(name, comment);
            commentsContainer.appendChild(commentDiv);

            nameInput.value = '';
            commentInput.value = '';
        }
    });

    function createCommentElement(name, comment) {
        const commentDiv = document.createElement('div');
        commentDiv.className = 'comment';
        commentDiv.innerHTML = '<h2>' + name + '</h2><p>' + comment + '</p>';
        return commentDiv;
    }
});
