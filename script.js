<!--This project is developed by Shahbaz Ahmed Khan-->
<!--Student of B.Tech CSE at Invertis University-->
<!--BCS2021073-->
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Resume/CV Builder</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="nav">
    <button id="cmd" onclick="printpdf()" class="navbtn"><i class="fas fa-download"></i></button>
    <form>
        <input type="hidden" id="custinfo" name="custinfo">
        <button class="navbtn"><i class="fas fa-save"></i></button>
    </form>
    <button class="navbtn" href=""><i class="fas fa-home"></i></button>
</div>

<div class="resume" id="resume">
    <section id="print">
        <div class="head">
            <div class="main">
                <span class="name" contenteditable="true">YOUR</span> <span contenteditable="true">NAME</span>
                <div class="post" contenteditable="true">YOUR JOB PROFILE</div>
            </div>
            <div class="profile-pic-section">
                <input type="file" id="profilePicInput" accept="image/*" onchange="uploadProfilePic(event)" style="display:none;">
                <button class="btn btn-secondary" onclick="document.getElementById('profilePicInput').click();">Upload Profile Picture</button>
                <div class="profile-pic-container">
                    <img id="profilePic" src="" alt="Profile Picture" style="display:none; width: 100px; height: 100px; border-radius: 50%;">
                </div>
            </div>
            <div class="contacts">
                <span contenteditable="true" class="content">123-4567-7890</span><span class="symbol"> <i class="fas fa-phone"></i></span><br>
                <span contenteditable="true" class="content">samplemail@email.in</span><span class="symbol"> <i class="fas fa-envelope"></i></span><br>
                <span contenteditable="true" class="content">linkedin/username.com</span><span class="symbol"> <i class="fab fa-linkedin"></i></span><br>
                <span contenteditable="true" class="content">sample street-India</span><span class="symbol"> <i class="fas fa-map-marker-alt"></i></span>
            </div>
        </div>

        <div class="line"></div>
        <div class="mainbody">
            <div class="leftside">
                <span class="title">MY SKILLS</span><br><br>
                <div>
                    <div class="skill"><span><input type="checkbox" class="input-checkbox"></span><span><i class="fas fa-chevron-circle-right"></i></span> <span contenteditable="true">Write your skill here</span></div>
                    <div id="skills"></div>
                    <button id="skilladd" type="button" class="btn btn-success" onclick="addskill()"><i class="fas fa-plus-circle"></i> Skill</button>
                    <button id="skillrem" type="button" class="btn btn-danger" onclick="remskill(event)"><i class="fas fa-minus-circle"></i> Skill</button>
                </div>

                <br><br><span class="title">LANGUAGES</span><br><br>
                <div>
                    <div class="language"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">LANGNAME</span> - <span contenteditable="true">level you know</span></div>
                    <div id="languages"></div>
                    <button id="langadd" type="button" class="btn btn-success" onclick="addLang()"><i class="fas fa-plus-circle"></i> Language</button>
                    <button id="langrem" type="button" class="btn btn-danger" onclick="remLang(event)"><i class="fas fa-minus-circle"></i> Language</button>
                </div>

                <br><br><span class="title">PROJECTS</span><br><br>
                <div>
                    <div class="project"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Project Title</span> - <span contenteditable="true">Project Description</span></div>
                    <div id="projects"></div>
                    <button id="projadd" type="button" class="btn btn-success" onclick="addProject()"><i class="fas fa-plus-circle"></i> Project</button>
                    <button id="projrem" type="button" class="btn btn-danger" onclick="remProject(event)"><i class="fas fa-minus-circle"></i> Project</button>
                </div>

                <br><br><span class="title">COURSES</span><br><br>
                <div>
                    <div class="course"><span><input type="checkbox" class="input-checkbox"></span><span contenteditable="true">Course Title</span> - <span contenteditable="true">Certificate Link</span></div>
                    <div id="courses"></div>
                    <button id="courseadd" type="button" class="btn btn-success" onclick="addCourse()"><i class="fas fa-plus-circle"></i> Course</button>
                    <button id="courserem" type="button" class="btn btn-danger" onclick="remCourse(event)"><i class="fas fa-minus-circle"></i> Course</button>
                </div>
            </div>

            <div class="border"></div>
            <div class="rightside">
                <span class="title">PROFILE</span><br><br>
                <div contenteditable="true">Here you can write basic information about your career. Keep it brief and provide necessary information.</div>

                <br><br><span class="title">EDUCATION</span><br><br>
                <div>
                    <div id="education">
                        <div class="edublock">
                            <span><input type="checkbox" class="input-checkbox"></span>
                            <span class="education-head" contenteditable="true">YOUR DEGREE</span>
                            <div><span contenteditable="true">Institute name</span> - <span contenteditable="true">Passing Year</span></div>
                        </div>
                    </div>
                    <button id="eduadd" type="button" class="btn btn-success" onclick="addedu()"><i class="fas fa-plus-circle"></i> Education</button>
                    <button id="edurem" type="button" class="btn btn-danger" onclick="remedu(event)"><i class="fas fa-minus-circle"></i> Education</button>
                </div>
            </div>
        </div>
    </section>
    <section>
        <h4 style="font-size: small; color:white; text-align: center; font-family: 'Raleway', sans-serif; background-color: gray;">PROJECT BY: SHAHBAZ AHMED KHAN</h4>
    </section>
</div>
<script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.8.0/html2pdf.bundle.min.js"></script>
<script src="script.js"></script>
</body>
</html>
