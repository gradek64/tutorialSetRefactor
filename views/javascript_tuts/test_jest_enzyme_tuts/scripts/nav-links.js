var mql = window.matchMedia('(max-width: 980px)');
mql.addListener(screenTest);
const nav = document.querySelector('.nav');
const list = document.querySelector('.links');
const links = document.querySelectorAll('.links li>a');
const sections = document.querySelectorAll('.band');
const partitions = document.querySelectorAll('.partition');
const menuHamburger = document.querySelector('.menu-hamburger');

//apply mobile menu for screen
if (window.innerWidth < 980) {
  list.style.display = 'none';
  menuHamburger.appendChild(list);
  console.log('mobile');
}

//find the partition links parent section;
let sectionIndex = 0;
const sectionsPObj = {};
Array.from(partitions).forEach((e, i) => {
  let sectionParent = e.parentElement;
  sectionsPObj['partition' + sectionIndex] = sectionParent;
  sectionIndex++;
});
//find the partition links and mark them;
let partitionIndex = 0;
let nonPartitionIndex = 0;
Array.from(links).forEach((e, i) => {
  if (e.hasAttribute('partition')) {
    e.setAttribute('partition', 'partition' + partitionIndex);
    partitionIndex++;
  } else {
    e.setAttribute(
      'nonPartitionIndex',
      'nonPartitionIndex' + nonPartitionIndex
    );
    nonPartitionIndex++;
  }
});

//find non-partition sections;
Array.from(sections).forEach((e, i) => {
  console.log('sections', e);
});

function screenTest(e) {
  if (e.matches) {
    list.style.display = 'none';
    menuHamburger.appendChild(list);
    console.log('mobile');
  } else {
    console.log('not mobile');
    nav.appendChild(list);
    list.style.display = 'block';
  }
}

document.querySelector('.menu').addEventListener(
  'click',
  e => {
    console.log('list', list);
    list.style.display === 'block'
      ? (list.style.display = 'none')
      : (list.style.display = 'block');
  },
  false
);

const callback = i => evt => {
  //evt.stopPropagation();// U do want bubtle on this occasion ;)

  //comment below for production;
  evt.preventDefault();
  //comment above for production;

  //check if link is partition link
  sections.forEach(e => {
    e.classList.remove('activeSection');
  });
  let currentPartition = evt.target.getAttribute('partition');
  let currentNonPartitionIndex = evt.target.getAttribute('nonPartitionIndex');
  if (currentPartition) {
    //find section to be active
    sectionsPObj[currentPartition].classList.add('activeSection');
    //find partion to be active
    let index = currentPartition.match(/[0-9]+/)[0];
    partitions.forEach(e => {
      e.classList.remove('first');
    });
    partitions[index].classList.add('first');

    return;
  }

  if (currentNonPartitionIndex) {
    let index = currentNonPartitionIndex.match(/[0-9]+/)[0];
    sections[index].classList.add('activeSection');

    //for setting up partition order
    let secPartitions = sections[index].querySelectorAll('.partition');
    if (secPartitions.length !== 0) {
      secPartitions.forEach(e => {
        e.classList.remove('first');
      });
      secPartitions[0].classList.add('first');
    }
  }
};

Array.prototype.forEach.call(links, (e, i) => {
  e.addEventListener('click', callback(i), false);
});
