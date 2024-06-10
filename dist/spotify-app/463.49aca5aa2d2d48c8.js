"use strict";(self.webpackChunkspotify_app=self.webpackChunkspotify_app||[]).push([[463],{7463:(P,c,t)=>{t.r(c),t.d(c,{default:()=>b});var g=t(467),o=t(4438),d=t(177),n=t(9417),l=t(1532),u=t(9631),_=t(9213),s=t(8834),m=t(5574),f=t(6095),p=t(6187),h=t(3374);function v(i,E){if(1&i&&(o.j41(0,"mat-error"),o.EFF(1),o.k0s()),2&i){const r=E.ngIf;o.R7$(),o.JRh(r)}}let b=(()=>{class i{constructor(){this.hide=!0,this.formBuilder=(0,o.WQX)(n.ok),this.formularioHTML=this.formBuilder.group({names:this.formBuilder.control("",{validators:n.k0.required,nonNullable:!0}),lastName:this.formBuilder.control("",{validators:n.k0.required,nonNullable:!0}),email:this.formBuilder.control("",{validators:[n.k0.required,n.k0.email],nonNullable:!0}),password:this.formBuilder.control("",{validators:n.k0.required,nonNullable:!0})}),this.authSrv=(0,o.WQX)(f.u),this._router=(0,o.WQX)(m.Ix),this._snackBar=(0,o.WQX)(p.UG)}get isEmailValid(){const r=this.formularioHTML.get("email");return!(!r?.invalid||!r.touched)&&(r.hasError("required")?"Este campo es obligatorio":"Introduce un correo valido")}signUp(){var r=this;return(0,g.A)(function*(){if(r.formularioHTML.invalid)return;const a={email:r.formularioHTML.value.email||"",password:r.formularioHTML.value.password||""};try{yield r.authSrv.signUpWithEmailAndPassword(a),r.openSnackBar().afterDismissed().subscribe(()=>{r._router.navigateByUrl("/home"),console.log(a.email)})}catch(e){console.error(e)}})()}openSnackBar(){return this._snackBar.open("Registrado correctamente","Cerrar",{duration:2500,verticalPosition:"top",horizontalPosition:"end"})}static#o=this.\u0275fac=function(a){return new(a||i)};static#r=this.\u0275cmp=o.VBU({type:i,selectors:[["app-sign-up"]],standalone:!0,features:[o.Jv_([]),o.aNF],decls:50,vars:6,consts:[[1,"form"],[1,"form__container"],[3,"ngSubmit","formGroup"],["matInput","","formControlName","names"],["matInput","","formControlName","lastName"],["matInput","","formControlName","email"],[4,"ngIf"],["matInput","","formControlName","password",3,"type"],["mat-icon-button","","matSuffix","",3,"click"],["mat-flat-button","","color","accent","type","submit"],[1,"small-text","providers"],[1,"small-text","log-in-redirect"],["routerLink","/auth/app-log-in"]],template:function(a,e){1&a&&(o.j41(0,"div",0)(1,"div",1)(2,"h1"),o.EFF(3,"Registro"),o.k0s(),o.j41(4,"form",2),o.bIt("ngSubmit",function(){return e.signUp()}),o.j41(5,"div")(6,"mat-form-field")(7,"mat-label"),o.EFF(8,"Nombres"),o.k0s(),o.nrm(9,"input",3),o.j41(10,"mat-error"),o.EFF(11,"Este campo es obligatorio"),o.k0s()()(),o.j41(12,"div")(13,"mat-form-field")(14,"mat-label"),o.EFF(15,"Apellidos"),o.k0s(),o.nrm(16,"input",4),o.j41(17,"mat-error"),o.EFF(18,"Este campo es obligatorio"),o.k0s()()(),o.j41(19,"div")(20,"mat-form-field")(21,"mat-label"),o.EFF(22,"Email"),o.k0s(),o.nrm(23,"input",5),o.DNE(24,v,2,1,"mat-error",6),o.k0s()(),o.j41(25,"div")(26,"mat-form-field")(27,"mat-label"),o.EFF(28,"Introduce tu contrase\xf1a"),o.k0s(),o.nrm(29,"input",7),o.j41(30,"button",8),o.bIt("click",function(){return e.hide=!e.hide}),o.j41(31,"mat-icon"),o.EFF(32),o.k0s()(),o.j41(33,"mat-error"),o.EFF(34,"Este campo es obligatorio"),o.k0s()()(),o.j41(35,"div")(36,"button",9),o.EFF(37,"Sign up"),o.k0s()()(),o.nrm(38,"hr"),o.j41(39,"span",10),o.EFF(40,"Tienes Google o GitHub?"),o.k0s(),o.nrm(41,"app-button-providers"),o.j41(42,"span",11),o.EFF(43,"Ya est\xe1s registrado? "),o.j41(44,"a",12),o.EFF(45,"Iniciar Sesi\xf3n"),o.k0s()()()(),o.j41(46,"h1"),o.EFF(47,"HOLA "),o.k0s(),o.j41(48,"p"),o.EFF(49,"pablo"),o.k0s()),2&a&&(o.R7$(4),o.Y8G("formGroup",e.formularioHTML),o.R7$(20),o.Y8G("ngIf",e.isEmailValid),o.R7$(5),o.Y8G("type",e.hide?"password":"text"),o.R7$(),o.BMQ("aria-label","Hide password")("aria-pressed",e.hide),o.R7$(2),o.JRh(e.hide?"visibility_off":"visibility"))},dependencies:[l.RG,l.rl,l.nJ,l.TL,l.yw,u.fS,u.fg,_.m_,_.An,s.Hl,s.$z,s.iY,n.X1,n.qT,n.me,n.BC,n.cb,n.j4,n.JD,m.iI,m.Wk,d.bT,p._T,h.L,d.MD],styles:["[_ngcontent-%COMP%]:root{--background-color: #2e3b4e;--container-background: #3b4a5e;--primary-color: #1c2a3a;--primary-light-color: #455a64;--primary-dark-color: #0d1b2a;--text-color: #ffffff;--error-color: #ff6b6b;--link-color: #4fc3f7;--link-hover-color: #0288d1}body[_ngcontent-%COMP%], html[_ngcontent-%COMP%]{height:100%;margin:0;font-family:Roboto,sans-serif;background-color:var(--background-color)}.form[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;padding:1rem}.form__container[_ngcontent-%COMP%]{background:var(--container-background);padding:2rem;border-radius:10px;box-shadow:0 8px 16px #0003;width:100%;max-width:450px;box-sizing:border-box}h1[_ngcontent-%COMP%]{margin-bottom:2rem;font-size:28px;color:var(--text-color);text-align:center;font-weight:500}mat-form-field[_ngcontent-%COMP%]{width:100%;margin-bottom:1.5rem}mat-form-field[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:.5rem}input[matInput][_ngcontent-%COMP%]{padding:.5rem;border-radius:4px;border:1px solid var(--primary-light-color);background-color:var(--primary-dark-color);color:var(--text-color)}mat-error[_ngcontent-%COMP%]{color:var(--error-color)}button[type=submit][_ngcontent-%COMP%]{width:100%;padding:.75rem;background-color:var(--primary-color);color:var(--text-color);border:none;border-radius:5px;cursor:pointer;font-size:16px;font-weight:600;transition:background-color .3s ease}button[type=submit][_ngcontent-%COMP%]:hover{background-color:var(--primary-light-color)}.small-text[_ngcontent-%COMP%]{display:block;text-align:center;margin-top:1rem;font-size:14px;color:var(--text-color)}.providers[_ngcontent-%COMP%], .log-in-redirect[_ngcontent-%COMP%]{display:block;margin-top:1rem;text-align:center;font-size:14px;color:var(--text-color)}.log-in-redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--link-color);text-decoration:none;font-weight:500}.log-in-redirect[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:var(--link-hover-color)}"]})}return i})()}}]);