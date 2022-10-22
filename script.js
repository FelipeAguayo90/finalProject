let userName = $('#displayName');

let userComment = $('#comment')

$('#submit').on('click', function() {
$('#posts').prepend(`
<div class="submittedPost">
    <img src="Pictures/profilePics.png">
    <div id="posted">
        <div id="topPosted">
            <span style="float: left;">${userName.val()}</span>
            <span class="edit" style="float: right;">Edit</span>
            <span class="delete" style="float: right; margin: 0 20px 0 20px;">Delete</span>
        </div>
        <div>
            <h2>${userComment.val()}</h2>
        </div>
        <div class="noDisplay">
            <input class="editComment" type="text" placeholder="Comment">
            <span style="display: inline;" id="submit">Submit</span>
        </div>
    </div>
</div>
</div>
`)
});


$('#posts').on('click', '.delete', function() {
    let grandparent = $(this).parents();
    $(grandparent)[2].remove();
});

$('#posts').on('click', '.edit', function() {
    let parent = $(this).parents()[0];
   let brother = $(parent).next();
   let youngBrother = $(brother).next();
   $(youngBrother).toggleClass('noDisplay');
});

$('#posts').on('click', '#submit', function() {
    let newComment = $(this).prev();
    let parent = $(this).parents()[0];
    let brother = $(parent).prev();
    let commentChange = $(brother).children()[0];
    $(commentChange).text(newComment.val());
});

