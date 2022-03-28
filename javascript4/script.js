//Body tag

var bodyTag=document.querySelector('body');
bodyTag.style.margin=0;
bodyTag.style.padding=0;
bodyTag.style.boxSizing="border-box";

//container Tag

var bodyContainer=document.createElement('div');
bodyContainer.setAttribute('id','container');
bodyTag.appendChild(bodyContainer);
bodyContainer.style.width="100%";
bodyContainer.style.height='100vh';

//Navbar Outer Div

var navbarRow=document.createElement('div');
navbarRow.setAttribute('id','navbarRow');
bodyContainer.appendChild(navbarRow);

//Navbar Tag

var navbar=document.createElement('div');
navbar.setAttribute('id','navbar');
navbarRow.appendChild(navbar);
navbar.style.width="100%";
navbar.style.height="65px";
navbar.style.backgroundColor="#fff";
navbar.style.boxShadow="0px 5px 10px #323232";
navbar.style.display="flex";
navbar.style.justifyContent="space-around";
navbar.style.alignItems="center";

//Navbar Heading tag

var navbarHeading=document.createElement('h1');
navbar.setAttribute('id','navbarHeading');
navbarHeading.textContent="Select Courses";
navbar.appendChild(navbarHeading);
navbarHeading.style.fontFamily="arial";
navbarHeading.style.marginRight="45vw";

//navbar Button

var navbarBtn=document.createElement('button');
navbarBtn.setAttribute('onmouseover','hoverEffect(this)');
navbarBtn.setAttribute('onmouseleave','hoverEffectEnd(this)');
navbarBtn.innerHTML="Add New Course";
navbar.appendChild(navbarBtn);
navbar.style.width="60rem";
navbar.style.height="8.2rem";
navbar.style.marginLeft="2vw";
navbarBtn.style.backgroundColor="#d40000";
navbarBtn.style.border="none";
navbarBtn.style.color="#fff";
navbarBtn.style.fontWeight="700";
navbarBtn.style.fontSize="13px";
navbarBtn.style.borderRadius="0.3rem";
navbarBtn.style.transition="0.5s";
navbarBtn.style.cursor="pointer";
navbarBtn.style.width="10vw";
navbarBtn.style.height="5vh";

function hoverEffect(x){
	x.style.backgroundColor="#960000";
}

function hoverEffectEnd(x){
	x.style.backgroundColor="#d40000";
}

//Content box Background

var contentBoxBg=document.createElement('div');
contentBoxBg.setAttribute('id','contentBoxBg');
bodyContainer.appendChild(contentBoxBg);
contentBoxBg.style.backgroundColor="#525252";
contentBoxBg.style.width="100%";
contentBoxBg.style.height="90vh";
contentBoxBg.style.display="flex";
contentBoxBg.style.justifyContent="center";
contentBoxBg.style.alignItems="center";
contentBoxBg.style.marginTop="1vh"; 


//Content Box

var contentBox=document.createElement('div');
contentBox.setAttribute('id','contentBox1');
contentBoxBg.appendChild(contentBox);
contentBox.style.width="90vw";
contentBox.style.height="45vh";
contentBox.style.backgroundColor="#fff";
contentBox.style.borderRadius="1rem";
contentBox.style.boxShadow="3px 4px 10xp #212121";
contentBox.style.display="flex";
contentBox.style.alignItems="center";

//Column1

var column1=document.createElement('div');
contentBox.setAttribute('id','column1');
contentBox.appendChild(column1);
column1.style.width="30vw";
column1.style.height="45vh";
column1.style.borderRight="1px solid #aaaaaa";

//column 1 heading

var column1Heading=document.createElement('div');
column1.setAttribute('id','column1Heading');
column1Heading.textContent="Available Courses";
column1.appendChild(column1Heading);
column1Heading.style.fontFamily="segoe ui";
column1Heading.style.fontWeight="600";
column1Heading.style.fontSize="24px";
column1Heading.style.textAlign="center";
column1Heading.style.marginTop="1rem";

//Available Courses

var divOuter=document.createElement('div');
divOuter.setAttribute('id','divOuter');
column1.appendChild(divOuter);
divOuter.style.display="flex";

//Available Courses Name

var coursesName=document.createElement('div');
coursesName.setAttribute('id','coursesName');
divOuter.appendChild(coursesName);
coursesName.style.fontFamily="segoe ui";
coursesName.style.fontSize="14px";
coursesName.style.marginLeft="3.9rem";
coursesName.style.marginTop="1rem"
coursesName.innerHTML=`
					  <p>HTML</p>
					  <p>CSS</p>
					  <p>BOOTSTRAP</p>
					  <p>JAVASCRIPT</p>
					  <p>PHP</p>
					  
`;


//Available Courses Fee

var coursesFee=document.createElement('div');
coursesFee.setAttribute('id','coursesFee');
divOuter.appendChild(coursesFee);
coursesFee.style.fontFamily="segoe ui";
coursesFee.style.fontSize="14px";
coursesFee.style.color="#7d7d7d";
coursesFee.style.marginLeft="1rem";
coursesFee.style.marginTop="1rem";
coursesFee.innerHTML=`
                     <p>$50</p>
                     <p>$55</p>
                     <p>$40</p>
                     <p>$99</p>
                     <p>$60</p>
                     
`;
//Available Courses Checkboxes

var coursesCheckBox=document.createElement('div');
coursesCheckBox.setAttribute('id','coursesCheckBox');
divOuter.appendChild(coursesFee);
coursesCheckBox.style.fontFamily="segoe ui";
coursesCheckBox.style.fontSize="14px";
coursesCheckBox.style.color="#7d7d7d";
coursesCheckBox.style.marginLeft="1rem";


//Column2

var column2=document.createElement('div');
column2.setAttribute('id','column2');
contentBox.appendChild(column2);
column2.style.width="30vw";
column2.style.height="45vh";
column2.style.borderRight="1px solid #aaaaaa";

//column3

var column3=document.createElement('div');
column3.setAttribute('id','column3');
contentBox.appendChild(column3);
column3.style.width="30vw";
column3.style.height="45vh";

//column3 Heading

var column1Heading=document.createElement('h1');
column1Heading.setAttribute('id','column1Heading');
column1Heading.textContent="Selected Courses";
column3.appendChild(column1Heading);
column1Heading.style.fontFamily="segoe ui";
column1Heading.style.fontWeight="600";
column1Heading.style.fontSize="24px";
column1Heading.style.textAlign="center";
