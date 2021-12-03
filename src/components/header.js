const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const divHeader = document.createElement('div');
  const spanDate = document.createElement('span');
  const headTitle = document.createElement('h1');
  const spanTemp = document.createElement('span');

  divHeader.classList.add('header');
  spanDate.classList.add('date');
  spanTemp.classList.add('temp');

  divHeader.appendChild(spanDate);
  divHeader.appendChild(headTitle);
  divHeader.appendChild(spanTemp);

  spanDate.textContent = `${date}`;
  headTitle.textContent = `${title}`;
  spanTemp.textContent = `${temp}`;

  return divHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  const headerDiv = document.querySelector(selector)
  headerDiv.appendChild(Header('Bloom Times', 'December 3rd, 2021', '82°F'));

return headerDiv;
}

export { Header, headerAppender }
