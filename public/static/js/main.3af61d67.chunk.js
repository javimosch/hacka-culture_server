(this["webpackJsonpget-scripts"]=this["webpackJsonpget-scripts"]||[]).push([[0],{205:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),i=a.n(r),c=a(6),o=a(1),u=a(2),s=a(4),p=a(3),m=a(5),h=a(19),d=a.n(h),E=new(function(){function e(){Object(o.a)(this,e),this.auth=d.a.create({baseURL:"https://m3-deploy-codealong-hackac.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"signup",value:function(e){var t=e.firstName,a=e.lastName,n=e.email,l=e.password,r=e.location,i=e.skills,c=e.preferedProject;return this.auth.post("/auth/signup",{firstName:t,lastName:a,email:n,password:l,location:r,skills:i,preferedProject:c}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/login",{email:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}}]),e}()),g=l.a.createContext(),b=g.Consumer,v=g.Provider,j=function(e){return function(t){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(m.a)(a,t),Object(u.a)(a,[{key:"render",value:function(){var t=this;return l.a.createElement(b,null,(function(a){var n=a.login,r=a.signup,i=a.logout,c=a.user,o=a.isLoggedIn;return l.a.createElement(e,Object.assign({user:c,isLoggedIn:o,login:n,signup:r,logout:i},t.props))}))}}]),a}(n.Component)},f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={isLoggedIn:!1,user:null,isLoading:!0},a.signup=function(e,t,n,l,r,i,c){E.signup({firstName:e,lastName:t,email:n,password:l,location:r,skills:i,preferedProject:c}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.login=function(e,t){E.login({email:e,password:t}).then((function(e){return a.setState({isLoggedIn:!0,user:e})})).catch((function(e){return console.log(e)}))},a.logout=function(){E.logout().then((function(){return a.setState({isLoggedIn:!1,user:null})})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.me().then((function(t){return e.setState({isLoggedIn:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedIn:!1,user:null,isLoading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedIn,n=e.user,r=this.login,i=this.logout,c=this.signup;return l.a.createElement(v,{value:{isLoading:t,isLoggedIn:a,user:n,login:r,logout:i,signup:c}},this.props.children)}}]),t}(l.a.Component),k=(a(67),a(16)),y=j(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.logout,n=e.isLoggedIn;return l.a.createElement("nav",{className:"navbar"},n?l.a.createElement(l.a.Fragment,null,l.a.createElement(c.b,{to:"/user-profile-edit"},l.a.createElement("p",null,"Email: ",t.email)),l.a.createElement(c.b,{to:"/",id:"home-btn"},l.a.createElement("h4",null,"Home")),l.a.createElement("button",{onClick:a},"Logout")):l.a.createElement(l.a.Fragment,null,l.a.createElement(c.b,{to:"/login"}," ",l.a.createElement("button",{className:"navbar-button"},"Login")," "),l.a.createElement("br",null),l.a.createElement(c.b,{to:"/",id:"home-btn"},l.a.createElement("h4",null,"Home")),l.a.createElement(c.b,{to:"/signup"}," ",l.a.createElement("button",{className:"navbar-button"},"Sign Up")," ")))}}]),t}(n.Component));var O=function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Home Page"))},S=a(8),C=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",password:"",location:"",skills:"",preferedProject:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstName,l=t.lastName,r=t.email,i=t.password,c=t.location,o=t.skills,u=t.preferedProject;a.props.signup(n,l,r,i,c,o,u)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type,i=t.options;if("select-multiple"===r){l=[];for(var c=0;c<i.length;c++)i[c].selected&&l.push(i[c].value);console.log("value multi select",l)}a.setState(Object(S.a)({},n,l))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.password,i=e.location,o=e.skills,u=e.preferedProject;return l.a.createElement("div",null,l.a.createElement("h1",null,"Sign Up"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Last Name:"),l.a.createElement("input",{type:"text",name:"lastName",value:a,onChange:this.handleChange}),l.a.createElement("label",null,"First Name:"),l.a.createElement("input",{type:"text",name:"firstName",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:n,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:r,onChange:this.handleChange}),l.a.createElement("label",null,"Location:"),l.a.createElement("input",{type:"text",name:"location",value:i,onChange:this.handleChange}),l.a.createElement("label",null,"Skills:"),l.a.createElement("select",{name:"skills",value:o,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"data"},"data"),l.a.createElement("option",{value:"WebDev"},"WebDev"),l.a.createElement("option",{value:"UXUI"},"UXUI")),l.a.createElement("label",null,"Prefered Project Category:"),l.a.createElement("select",{name:"preferedProject",value:u,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business")),l.a.createElement("input",{type:"submit",value:"Signup"})),l.a.createElement("p",null,"Already have account?"),l.a.createElement(c.b,{to:"/login"}," Login"))}}]),t}(n.Component)),P=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={email:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.email,l=t.password;a.props.login(n,l)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;a.setState(Object(S.a)({},n,l))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return l.a.createElement("div",null,l.a.createElement("h1",null,"Login"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("label",null,"Email:"),l.a.createElement("input",{type:"text",name:"email",value:t,onChange:this.handleChange}),l.a.createElement("label",null,"Password:"),l.a.createElement("input",{type:"password",name:"password",value:a,onChange:this.handleChange}),l.a.createElement("input",{type:"submit",value:"Login"})))}}]),t}(n.Component)),N=j(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"User Portal"),l.a.createElement(c.b,{to:"/initiator-dashboard"},l.a.createElement("h4",null,"Initiate")),l.a.createElement(c.b,{to:"/participant-dashboard"},l.a.createElement("h4",null,"Participate")),l.a.createElement(c.b,{to:"/seek-users"},l.a.createElement("h4",null,"Profiles")),l.a.createElement("h1",null,"Welcome ",this.props.user.email))}}]),t}(n.Component)),q=new(function(){function e(){Object(o.a)(this,e),this.user=d.a.create({baseURL:"https://m3-deploy-codealong-hackac.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"updateUser",value:function(e){var t=e.firstName,a=e.lastName,n=e.email,l=e.location,r=e.skills,i=e.preferedProject;return this.user.put("/user/edit",{firstName:t,lastName:a,email:n,location:l,skills:r,preferedProject:i}).then((function(e){return e.data}))}},{key:"getOne",value:function(e){return this.user.get("/user/".concat(e)).then((function(e){return e.data}))}},{key:"getAll",value:function(){return this.user.get("/user/all").then((function(e){return e.data}))}}]),e}()),U=(a(18),j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",location:"",skills:"",preferedProject:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.firstName,l=t.lastName,r=t.email,i=t.location,c=t.skills,o=t.preferedProject;q.updateUser({firstName:n,lastName:l,email:r,location:i,skills:c,preferedProject:o}).then((function(e){console.log("updateUser",e)})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type,i=t.options;if("select-multiple"===r){l=[];for(var c=0;c<i.length;c++)i[c].selected&&l.push(i[c].value)}a.setState(Object(S.a)({},n,l))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.me().then((function(t){e.setState({firstName:t.firstName,lastName:t.lastName,email:t.email,location:t.location,skills:t.skills,preferedProject:t.preferedProject}),console.log("this.state in componentDidMount",e.state)}))}},{key:"render",value:function(){var e=this.state,t=e.firstName,a=e.lastName,n=e.email,r=e.location,i=e.skills,c=e.preferedProject;return l.a.createElement("div",null,l.a.createElement("h1",null,"Edit User Profile"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Last Name"),l.a.createElement("input",{type:"text",name:"lastName",value:a,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"First Name"),l.a.createElement("input",{type:"text",name:"firstName",value:t,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Email"),l.a.createElement("input",{type:"text",name:"email",value:n})),l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("input",{type:"text",name:"location",value:r,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Skills"),l.a.createElement("select",{name:"skills",value:i,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"data"},"data"),l.a.createElement("option",{value:"WebDev"},"WebDev"),l.a.createElement("option",{value:"UXUI"},"UXUI"))),l.a.createElement("div",null,l.a.createElement("label",null,"Prefered Project Category"),l.a.createElement("select",{name:"preferedProject",value:c,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"Mutate"}))))}}]),t}(n.Component))),D=new(function(){function e(){Object(o.a)(this,e),this.project=d.a.create({baseURL:"https://m3-deploy-codealong-hackac.herokuapp.com",withCredentials:!0})}return Object(u.a)(e,[{key:"createProject",value:function(e){var t=e.projectName,a=e.description,n=e.githubUrl,l=e.status,r=e.location,i=e.projectCategory,c=e.requiredDataSkill,o=e.requiredWebdevSkill,u=e.requiredUxuiSkill;return this.project.post("/project/create",{projectName:t,description:a,githubUrl:n,status:l,location:r,projectCategory:i,requiredDataSkill:c,requiredWebdevSkill:o,requiredUxuiSkill:u}).then((function(e){return e.createdProject}))}},{key:"getOne",value:function(e){return this.project.get("/project/".concat(e)).then((function(e){return e.data}))}},{key:"updateProject",value:function(e,t){return this.project.put("/project/edit/".concat(e),t).then((function(e){return e.data}))}},{key:"getAll",value:function(){return this.project.get("/project/all").then((function(e){return e.data}))}},{key:"applyToProject",value:function(e){return this.project.put("/project/apply/".concat(e)).then((function(e){return e.data}))}},{key:"acceptParticipant",value:function(e,t){return this.project.put("/project/accept/".concat(e,"/").concat(t)).then((function(e){return e.data}))}}]),e}()),x=j(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("PTOPS",this.props._id),console.log("TYPE",typeof this.props._id),l.a.createElement("div",null,l.a.createElement(c.b,{to:"/initiator-edit-project/".concat(this.props._id)},l.a.createElement("h4",null,this.props.projectName),l.a.createElement("h4",null,this.props.projectCategory),l.a.createElement("h4",null,this.props.requiredDataSkill),l.a.createElement("h4",null,this.props.requiredWebdevSkill),l.a.createElement("h4",null,this.props.requiredUxuiSkill)))}}]),t}(n.Component)),L=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={projects:[],isLoading:!0},a.getInitiatorProjects=function(){var e=a.props.user._id;q.getOne(e).then((function(e){a.setState({projects:e.initiatorOnProject,isLoading:!1})})).catch((function(e){return console.log("error",e)}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.user._id;this.getInitiatorProjects()}},{key:"componentDidUpdate",value:function(e){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Initiator Dashboard"),l.a.createElement(c.b,{to:"/initiator-add-project"},l.a.createElement("h4",null,"Kick a Project off")),l.a.createElement("h3",null,"My Projects as Initiator"),this.state.isLoading?null:this.state.projects.map((function(e){return console.log("PROJECT",e),l.a.createElement(x,Object.assign({key:e._id},e))})))}}]),t}(n.Component)),w=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={projectName:"",description:"",githubUrl:"",status:"planning",location:"",projectCategory:"NGO",requiredDataSkill:"",requiredWebdevSkill:"",requiredUxuiSkill:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.projectName,l=t.description,r=t.githubUrl,i=t.status,c=t.location,o=t.projectCategory,u=t.requiredDataSkill,s=t.requiredWebdevSkill,p=t.requiredUxuiSkill;console.log("this.state for creating",a.state),D.createProject({projectName:n,description:l,initiator:a.props.user._id,githubUrl:r,status:i,location:c,projectCategory:o,requiredDataSkill:u,requiredWebdevSkill:s,requiredUxuiSkill:p}).then(a.props.history.push("/initiator-dashboard")).catch((function(e){return console.log("error",e)}))},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type;t.options;console.log("type",r),a.setState(Object(S.a)({},n,l))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.projectName,a=e.description,n=e.githubUrl,r=e.status,i=e.location,o=e.projectCategory,u=e.requiredDataSkill,s=e.requiredWebdevSkill,p=e.requiredUxuiSkill;return l.a.createElement("div",null,l.a.createElement("h1",null,"Initiator Add Project"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Project Name"),l.a.createElement("input",{type:"text",name:"projectName",value:t,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",value:a,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"GithubUrl"),l.a.createElement("input",{type:"text",name:"githubUrl",value:n,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Status"),l.a.createElement("select",{name:"status",value:r,onChange:this.handleChange},l.a.createElement("option",{value:"planning"},"planning"),l.a.createElement("option",{value:"execution"},"execution"),l.a.createElement("option",{value:"closed"},"closed"))),l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("input",{type:"text",name:"location",value:i,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Project Category"),l.a.createElement("select",{name:"projectCategory",value:o,onChange:this.handleChange},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",null,l.a.createElement("label",null,"Required Data Skill"),l.a.createElement("input",{type:"number",name:"requiredDataSkill",value:u,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Webdev Skill"),l.a.createElement("input",{type:"number",name:"requiredWebdevSkill",value:s,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Uxui Skill"),l.a.createElement("input",{type:"number",name:"requiredUxuiSkill",value:p,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Kick off"})),l.a.createElement(c.b,{to:"/initiator-dashboard"}," Don't Create"))}}]),t}(n.Component)),I=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).acceptSubmit=function(e){e.preventDefault();var t=a.props._id,n=a.props.projectId;console.log("this.props.match.params",a.props.projectId),D.acceptParticipant(n,t).then((function(e){return console.log("result",e)})).catch((function(e){return console.log("error",e)}))},a.declineSubmit=function(){D.declineParticipant()},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.b,{to:"/see-user-detail/".concat(this.props._id)},l.a.createElement("h4",null,this.props.firstName),l.a.createElement("h4",null,this.props.skills)),l.a.createElement("form",{onSubmit:this.acceptSubmit},l.a.createElement("button",{type:"submit"},"Accept")),l.a.createElement("form",{onSubmit:this.declineSubmit},l.a.createElement("button",{type:"submit"},"Decline")),"//Accept button -> onCLick: related backEnd routes //Decline button -> onCLick: related backEnd routes")}}]),t}(n.Component)),W=j(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.b,{to:"/see-user-detail/".concat(this.props._id)},l.a.createElement("h4",null,this.props.firstName),l.a.createElement("h4",null,"skills: ",this.props.skills),l.a.createElement("h4",null,"prefered projects: ",this.props.preferedProject),l.a.createElement("h4",null,"Location: ",this.props.location)))}}]),t}(n.Component)),A=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={projectName:"",description:"",initiator:"",githubUrl:"",status:"",location:"",projectCategory:"",requiredDataSkill:"",requiredWebdevSkill:"",requiredUxuiSkill:"",appliedParticipants:"",acceptedParticipants:"",isLoading:!0},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n={projectName:t.projectName,description:t.description,initiator:t.initiator,githubUrl:t.githubUrl,status:t.status,location:t.location,projectCategory:t.projectCategory,requiredDataSkill:t.requiredDataSkill,requiredWebdevSkill:t.requiredWebdevSkill,requiredUxuiSkill:t.requiredUxuiSkill},l=a.props.match.params.id;D.updateProject(l,n).then((function(e){console.log("updatedUser",e)})).catch((function(e){return console.log(e)}))},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value;t.type,t.options;a.setState(Object(S.a)({},n,l))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("ID",t),D.getOne(t).then((function(t){console.log("project in mount",t);var a=t.projectName,n=t.description,l=t.initiator,r=t.githubUrl,i=t.status,c=t.location,o=t.projectCategory,u=t.requiredDataSkill,s=t.requiredWebdevSkill,p=t.requiredUxuiSkill,m=t.appliedParticipants,h=t.acceptedParticipants;e.setState({projectName:a,description:n,initiator:l,githubUrl:r,status:i,location:c,projectCategory:o,requiredDataSkill:u,requiredWebdevSkill:s,requiredUxuiSkill:p,appliedParticipants:m,acceptedParticipants:h,isLoading:!1}),console.log("this.state",e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("h1",null,"Initiator Edit Project"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Project Name"),l.a.createElement("input",{type:"text",name:"projectName",value:this.state.projectName,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Description"),l.a.createElement("input",{type:"text",name:"description",value:this.state.description,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"GithubUrl"),l.a.createElement("input",{type:"text",name:"githubUrl",value:this.state.githubUrl,readOnly:!0})),l.a.createElement("div",null,l.a.createElement("label",null,"Status"),l.a.createElement("select",{name:"status",value:this.state.status,onChange:this.handleChange},l.a.createElement("option",{value:"planning"},"planning"),l.a.createElement("option",{value:"execution"},"execution"),l.a.createElement("option",{value:"closed"},"closed"))),l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Project Category"),l.a.createElement("select",{name:"projectCategory",value:this.state.projectCategory,onChange:this.handleChange},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",null,l.a.createElement("label",null,"Required Data Skill"),l.a.createElement("input",{type:"text",name:"requiredDataSkill",value:this.state.requiredDataSkill,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Webdev Skill"),l.a.createElement("input",{type:"text",name:"requiredWebdevSkill",value:this.state.requiredWebdevSkill,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Uxui Skill"),l.a.createElement("input",{type:"text",name:"requiredUxuiSkill",value:this.state.requiredUxuiSkill,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Save"})),l.a.createElement("h3",null,"Applicant"),this.state.isLoading?null:this.state.appliedParticipants.map((function(t){return l.a.createElement(I,Object.assign({key:t._id,projectId:e.props.match.params.id},t))})),l.a.createElement("h3",null,"Accepted"),this.state.isLoading?null:this.state.acceptedParticipants.map((function(e){return l.a.createElement(W,Object.assign({key:e._id},e))})),"// Delete Project button -> onCLick: related backEnd routes")}}]),t}(n.Component)),F=j(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.b,{to:"/participant-edit-project/".concat(this.props._id)},l.a.createElement("h4",null,this.props.projectName),l.a.createElement("h4",null,this.props.projectCategory)))}}]),t}(n.Component)),_=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={appliedOnProject:[],acceptedOnProject:[]},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.user._id;q.getOne(t).then((function(t){e.setState({appliedOnProject:t.appliedOnProject,acceptedOnProject:t.acceptedOnProject})})).catch((function(e){return console.log("error",e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Participant Dashboard"),l.a.createElement(c.b,{to:"/participant-seek-project"},l.a.createElement("h4",null,"Seek for Project")),l.a.createElement("h3",null,"My applied Projects"),this.state.appliedOnProject.map((function(e){return l.a.createElement(F,Object.assign({key:e._id},e))})),l.a.createElement("h3",null,"My accepted Projects"),this.state.acceptedOnProject.map((function(e){return l.a.createElement(F,Object.assign({key:e._id},e))})))}}]),t}(n.Component)),M=j(function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(c.b,{to:"/participant-edit-project/".concat(this.props._id)},l.a.createElement("h4",null,this.props.projectName),l.a.createElement("h4",null,this.props.projectCategory),l.a.createElement("h4",null,this.props.requiredDataSkill),l.a.createElement("h4",null,this.props.requiredWebdevSkill),l.a.createElement("h4",null,this.props.requiredUxuiSkill)))}}]),t}(n.Component)),R=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={status:"",projectCategory:"",requiredDataSkill:"",requiredWebdevSkill:"",requiredUxuiSkill:"",projects:[],isLoading:!0,projectsFiltered:[]},a.getAllProject=function(){D.getAll().then((function(e){console.log("allProjects in componentDidMount",e),a.setState({projects:e,projectsFiltered:e,isLoading:!1})})).catch((function(e){return console.log("error",e)}))},a.handleFormSubmit=function(e){e.preventDefault(),a.projectFilter(a.state.projects)},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type,i=t.options;if(console.log("type",r),"select-multiple"===r){l=[];for(var c=0;c<i.length;c++)i[c].selected&&(l.push(i[c].value),console.log("value",l))}a.setState(Object(S.a)({},n,l)),console.log("this.state after change",a.state)},a.projectFilter=function(e){var t=a.state,n=t.status,l=t.projectCategory,r=t.requiredDataSkill,i=t.requiredWebdevSkill,c=t.requiredUxuiSkill;if(n||l||r||i||c){console.log("this.state in filter",a.state);var o=e.filter((function(e){return console.log("project.status",e.status),(a.state.status.includes(e.status)||!a.state.status)&&a.state.projectCategory.includes(e.projectCategory)&&e.requiredDataSkill>=a.state.requiredDataSkill&&e.requiredWebdevSkill>=a.state.requiredWebdevSkill&&e.requiredUxuiSkill>=a.state.requiredUxuiSkill}));a.setState({projectsFiltered:o})}else a.getAllProject()},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getAllProject()}},{key:"render",value:function(){var e=this.state,t=e.status,a=e.projectCategory,n=e.requiredDataSkill,r=e.requiredWebdevSkill,i=e.requiredUxuiSkill;return l.a.createElement("div",null,l.a.createElement("h1",null,"Participant Seek Project"),l.a.createElement(c.b,{to:"/participant-dashboard"},l.a.createElement("h4",null,"Dashboard")),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Status"),l.a.createElement("select",{name:"status",value:t,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"planning"},"planning"),l.a.createElement("option",{value:"execution"},"execution"),l.a.createElement("option",{value:"closed"},"closed"))),l.a.createElement("div",null,l.a.createElement("label",null,"Project Category"),l.a.createElement("select",{name:"projectCategory",value:a,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",null,l.a.createElement("label",null,"Required Data Skill"),l.a.createElement("input",{type:"number",name:"requiredDataSkill",value:n,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Webdev Skill"),l.a.createElement("input",{type:"number",name:"requiredWebdevSkill",value:r,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Required Uxui Skill"),l.a.createElement("input",{type:"number",name:"requiredUxuiSkill",value:i,onChange:this.handleChange})),l.a.createElement("input",{type:"submit",value:"Filter"})),l.a.createElement("h3",null,"Result"),console.log("this.state.projects in render",this.state.projects),this.state.isLoading?null:this.state.projectsFiltered.map((function(e){return l.a.createElement(M,Object.assign({key:e._id},e))})))}}]),t}(n.Component)),G=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={projectName:"",description:"",initiator:"",githubUrl:"",status:"",location:"",projectCategory:"",requiredDataSkill:"",requiredWebdevSkill:"",requiredUxuiSkill:"",appliedParticipants:"",acceptedParticipants:"",isLoading:!0},a.handleFormSubmit=function(e){e.preventDefault();var t=a.props.match.params.id;D.applyToProject(t).then((function(e){console.log("updatedProject",e),a.props.history.push("/participant-dashboard")})).catch((function(e){return console.log(e)}))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;console.log("ID",t),D.getOne(t).then((function(t){console.log("project in mount",t);var a=t.projectName,n=t.description,l=t.initiator,r=t.githubUrl,i=t.status,c=t.location,o=t.projectCategory,u=t.requiredDataSkill,s=t.requiredWebdevSkill,p=t.requiredUxuiSkill,m=t.appliedParticipants,h=t.acceptedParticipants;e.setState({projectName:a,description:n,initiator:l,githubUrl:r,status:i,location:c,projectCategory:o,requiredDataSkill:u,requiredWebdevSkill:s,requiredUxuiSkill:p,appliedParticipants:m,acceptedParticipants:h,isLoading:!1}),console.log("this.state in EDIT PROJECT",e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Participant Edit Project"),l.a.createElement("h3",null,"Project Details"),l.a.createElement("h5",null,"Project Name"),l.a.createElement("p",null,this.state.projectName),l.a.createElement("h5",null,"description"),l.a.createElement("p",null,this.state.description),l.a.createElement(c.b,{to:"/see-user-detail/".concat(this.state.initiator._id)},l.a.createElement("h5",null,"initiator"),l.a.createElement("p",null,this.state.initiator.firstName)),l.a.createElement("h5",null,"projectCategory"),l.a.createElement("p",null,this.state.projectCategory),l.a.createElement("h5",null,"requiredDataSkill"),l.a.createElement("p",null,this.state.requiredDataSkill),l.a.createElement("h5",null,"requiredWebdevSkill"),l.a.createElement("p",null,this.state.requiredWebdevSkill),l.a.createElement("h5",null,"requiredUxuiSkill"),l.a.createElement("p",null,this.state.requiredUxuiSkill),l.a.createElement("h5",null,"githubUrl"),l.a.createElement("p",null,this.state.githubUrl),l.a.createElement("h5",null,"appliedParticipants"),this.state.isLoading?null:this.state.appliedParticipants.map((function(e){return l.a.createElement(c.b,{to:"/see-user-detail/".concat(e._id)},e.firstName)})),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("button",{type:"submit"},"Apply")),l.a.createElement(c.b,{to:"/participant-seek-project"},l.a.createElement("h4",null,"Seek Project")),l.a.createElement("h3",null,"Accepted participants"),this.state.isLoading?null:this.state.acceptedParticipants.map((function(e){return l.a.createElement(W,Object.assign({key:e._id},e))})))}}]),t}(n.Component)),H=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={location:"",skills:"",preferedProject:"",allUsers:[],filteredUsers:[],isLoading:!0},a.getAllUsers=function(){q.getAll().then((function(e){a.setState({allUsers:e,filteredUsers:e,isLoading:!1})})).catch((function(e){return console.log(e)}))},a.handleFormSubmit=function(e){e.preventDefault(),a.userFilter(a.state.allUsers)},a.userFilter=function(e){var t=a.state,n=t.location,l=t.skills,r=t.preferedProject;if(n||l||r){var i=e.filter((function(e){return e.skills.some((function(e){return a.state.skills.includes(e)}))&&e.preferedProject.some((function(e){return a.state.preferedProject.includes(e)}))&&e.location===a.state.location}));a.setState({filteredUsers:i})}else a.getAllUsers()},a.handleChange=function(e){var t=e.target,n=t.name,l=t.value,r=t.type,i=t.options;if("select-multiple"===r){l=[];for(var c=0;c<i.length;c++)i[c].selected&&l.push(i[c].value)}a.setState(Object(S.a)({},n,l))},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getAllUsers()}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Seek Users"),l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",null,l.a.createElement("label",null,"Location"),l.a.createElement("input",{type:"text",name:"location",value:this.state.location,onChange:this.handleChange})),l.a.createElement("div",null,l.a.createElement("label",null,"Skills"),l.a.createElement("select",{name:"skills",value:this.state.skills,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"data"},"data"),l.a.createElement("option",{value:"WebDev"},"WebDev"),l.a.createElement("option",{value:"UXUI"},"UXUI"))),l.a.createElement("div",null,l.a.createElement("label",null,"Prefered Project Category"),l.a.createElement("select",{name:"preferedProject",value:this.state.preferedProject,onChange:this.handleChange,multiple:!0},l.a.createElement("option",{value:"NGO"},"NGO"),l.a.createElement("option",{value:"Hackathon"},"Hackathon"),l.a.createElement("option",{value:"Business"},"Business"))),l.a.createElement("div",null,l.a.createElement("input",{type:"submit",value:"Filter"}))),l.a.createElement("h3",null,"Result"),this.state.isLoading?null:this.state.filteredUsers.map((function(e){return l.a.createElement(W,Object.assign({key:e._id},e))})))}}]),t}(n.Component)),B=j(function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).state={firstName:"",lastName:"",email:"",location:"",skills:"",preferedProject:"",initiatorOnProject:"",appliedOnProject:"",acceptedOnProject:"",isLoading:!0},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.id;q.getOne(t).then((function(t){var a=t.firstName,n=t.lastName,l=t.email,r=t.location,i=t.skills,c=t.preferedProject,o=t.initiatorOnProject,u=t.appliedOnProject,s=t.acceptedOnProject;e.setState({firstName:a,lastName:n,email:l,location:r,skills:i,preferedProject:c,initiatorOnProject:o,appliedOnProject:u,acceptedOnProject:s,isLoading:!1}),console.log("this state in USER DETAIL",e.state)})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"See User Detail"),l.a.createElement("h5",null,"firstName"),l.a.createElement("p",null,this.state.firstName),l.a.createElement("h5",null,"lastName"),l.a.createElement("p",null,this.state.lastName),l.a.createElement("h5",null,"email"),l.a.createElement("p",null,this.state.email),l.a.createElement("h5",null,"location"),l.a.createElement("p",null,this.state.location),l.a.createElement("h5",null,"skills"),l.a.createElement("p",null,this.state.skills),l.a.createElement("h5",null,"prefered Project"),l.a.createElement("p",null,this.state.preferedProject),l.a.createElement("h5",null,"initiator On Projects"),l.a.createElement("h3",null,"Initiator on Projects"),this.state.isLoading?null:this.state.initiatorOnProject.map((function(e){return l.a.createElement(F,Object.assign({key:e._id},e))})),l.a.createElement("h3",null,"Applied on Projects"),this.state.isLoading?null:this.state.appliedOnProject.map((function(e){return l.a.createElement(F,Object.assign({key:e._id},e))})),l.a.createElement("h3",null,"My accepted Projects"),this.state.isLoading?null:this.state.acceptedOnProject.map((function(e){return l.a.createElement(F,Object.assign({key:e._id},e))})))}}]),t}(n.Component)),T=a(21);var X=j((function(e){var t=e.component,a=e.isLoggedIn,n=Object(T.a)(e,["component","isLoggedIn"]);return(l.a.createElement(k.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(k.a,{to:"/user-portal"}):a?void 0:l.a.createElement(t,e)}})))}));var J=j((function(e){var t=e.component,a=e.isLoggedIn,n=Object(T.a)(e,["component","isLoggedIn"]);return l.a.createElement(k.b,Object.assign({},n,{render:function(e){return a?l.a.createElement(t,e):a?void 0:l.a.createElement(k.a,{to:"/login"})}}))})),K=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container"},l.a.createElement(y,null),l.a.createElement(k.d,null,l.a.createElement(X,{exact:!0,path:"/",component:O}),l.a.createElement(X,{exact:!0,path:"/signup",component:C}),l.a.createElement(X,{exact:!0,path:"/login",component:P}),l.a.createElement(J,{exact:!0,path:"/user-portal",component:N}),l.a.createElement(J,{exact:!0,path:"/user-profile-edit",component:U}),l.a.createElement(J,{exact:!0,path:"/initiator-dashboard",component:L}),l.a.createElement(J,{exact:!0,path:"/initiator-add-project",component:w}),l.a.createElement(J,{exact:!0,path:"/initiator-edit-project/:id",component:A}),l.a.createElement(J,{exact:!0,path:"/participant-dashboard",component:_}),l.a.createElement(J,{exact:!0,path:"/participant-seek-project",component:R}),l.a.createElement(J,{exact:!0,path:"/participant-edit-project/:id",component:G}),l.a.createElement(J,{exact:!0,path:"/seek-users",component:H}),l.a.createElement(J,{exact:!0,path:"/see-user-detail/:id",component:B})))}}]),t}(n.Component);a(204);i.a.render(l.a.createElement(c.a,null,l.a.createElement(f,null,l.a.createElement(K,null))),document.getElementById("root"))},47:function(e,t,a){e.exports=a(205)},67:function(e,t,a){}},[[47,1,2]]]);
//# sourceMappingURL=main.3af61d67.chunk.js.map