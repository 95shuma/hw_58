'use strict';

let comment = {
	id:1,
	userId:5, //ID юзера написавшего комментарий
	postId:3, //ID публикации к которой прикреплён комментарий
	text:"Great",
	print:function printAll() {
		console.log("Text: "+this.text);
		}
	};
let post = {
	id:1,
	title:"Kyrgyzstan",
	description:"I live in Kyrgyzstan",
	imageURL:"http://placekitten.com/500/300",
	userId:5, //ID юзера опубликовавшего этот пост
	isLiked: false,
	print:function printAll() {
		console.log("Title: "+this.title+
			"\nDescription: "+this.description+
			"\nLiked status: "+this.isLiked);
	}
};
function showSplashScreen() {
	document.getElementById("page-splash").hidden = false;
	document.body.classList.add("no-scroll");
}

function hideSplashScreen() {
	document.getElementById("page-splash").hidden = true;
	document.body.classList.remove("no-scroll");
}

function createCommentElement(comment) {
	let elem = document.createElement(`div`);
	elem.innerHTML = `<a href="#" class="muted">${comment.userId}</a>
	<p>${comment.text}</p>`;
	let att = document.createAttribute("class");
	att.value = "py-2 pl-3";
	elem.setAttributeNode(att);
	return elem;
}

let commentElement = createCommentElement(comment);

function addCommentElement(elem) {
	document.getElementById("comment").appendChild(elem);
}

function createPostElement(post) {
	let elem = document.createElement(`div`);
	elem.innerHTML = `
          <!-- image block start -->
          <div>
            <img class="d-block w-100" src="${post.imageURL}" alt="Post image">
          </div>
          <!-- image block end -->
          <div class="px-4 py-3">
            <!-- post reactions block start -->
            <div class="d-flex justify-content-around">
              <span class="h1 mx-2 text-danger">
                <i class="fas fa-heart"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="far fa-heart"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="far fa-comment"></i>
              </span>
              <span class="mx-auto"></span>
              <span class="h1 mx-2 muted">
                <i class="far fa-bookmark"></i>
              </span>
              <span class="h1 mx-2 muted">
                <i class="fas fa-bookmark"></i>
              </span>
            </div>
            <!-- post reactions block end -->
            <hr>
            <!-- post section start -->
            <div>
              <p>${post.description}</p>
              </div>
            <!-- post section end -->
            <hr>
            <!-- comments section start -->
            <div>
              <div class="py-2 pl-3">
                <a href="#" class="muted">someusername</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
              </div>
              <div class="py-2 pl-3">
                <a href="#" class="muted">someusername</a>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum ad est cumque nulla voluptatem enim voluptas minima illum quis! Voluptatibus dolorem minus tempore aliquid corrupti nesciunt, obcaecati fuga natus officiis.</p>
              </div>
            </div>
            <!-- comments section end -->
          </div>`;
	let att = document.createAttribute("class");
	att.value = "card my-3";
	elem.setAttributeNode(att);
	return elem;
}

let postElement = createPostElement(post);

function addPostElement(elem) {
	document.getElementById("posts").appendChild(elem);
}
