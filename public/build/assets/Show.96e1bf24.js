import{_ as p}from"./AppLayout.11332993.js";import c from"./DeleteUserForm.09a70ab3.js";import{J as s}from"./SectionBorder.35d60cd0.js";import l from"./LogoutOtherBrowserSessionsForm.f1a8ce95.js";import f from"./TwoFactorAuthenticationForm.a6517e70.js";import u from"./UpdatePasswordForm.3b172558.js";import d from"./UpdateProfileInformationForm.4272be3b.js";import{c as _,w as n,o,a as i,d as r,b as t,e as a,F as h}from"./app.68da1afe.js";import"./_plugin-vue_export-helper.cdc0426e.js";import"./Sponsor.fb52152a.js";import"./DialogModal.5652f893.js";import"./SectionTitle.11ce62b7.js";import"./Modal.bc55d3d6.js";import"./DangerButton.fce4df93.js";import"./Input.0751bc64.js";import"./InputError.b8b84cca.js";import"./SecondaryButton.af35b469.js";import"./ActionMessage.9ec19761.js";import"./Button.64ca3b3a.js";import"./Label.24c07f87.js";import"./FormSection.27ea7cef.js";const g=i("h2",{class:"font-semibold text-xl text-gray-800 dark:text-slate-200 leading-tight"}," Profile ",-1),$={class:"max-w-7xl mx-auto py-10 sm:px-6 lg:px-8"},k={key:0},w={key:1},x={key:2},H={__name:"Show",props:{confirmsTwoFactorAuthentication:Boolean,sessions:Array},setup(m){return(e,y)=>(o(),_(p,{title:"Profile"},{header:n(()=>[g]),default:n(()=>[i("div",null,[i("div",$,[e.$page.props.jetstream.canUpdateProfileInformation?(o(),r("div",k,[t(d,{user:e.$page.props.auth.user},null,8,["user"]),t(s)])):a("",!0),e.$page.props.jetstream.canUpdatePassword?(o(),r("div",w,[t(u,{class:"mt-10 sm:mt-0"}),t(s)])):a("",!0),e.$page.props.jetstream.canManageTwoFactorAuthentication?(o(),r("div",x,[t(f,{"requires-confirmation":m.confirmsTwoFactorAuthentication,class:"mt-10 sm:mt-0"},null,8,["requires-confirmation"]),t(s)])):a("",!0),t(l,{sessions:m.sessions,class:"mt-10 sm:mt-0"},null,8,["sessions"]),e.$page.props.jetstream.hasAccountDeletionFeatures?(o(),r(h,{key:3},[t(s),t(c,{class:"mt-10 sm:mt-0"})],64)):a("",!0)])])]),_:1}))}};export{H as default};