$(window).on("load",function(){$("form input").keydown(function(a){if(a.keyCode==13){a.preventDefault();return false}});$(".slot-accordion .govuk-accordion__section").slice(5).hide();if($("#showNotReg:checked").val()){$("#notRegisteredBox").toggle()}});$('input[name="openAll"]').click(function(){var a=$("#"+$(this).attr("data-check")+" input[name='okres']");if($(this).prop("checked")){a.prop("checked",true)}else{a.prop("checked",false)}});$('input[name="okres"]').click(function(){var a=$("input[data-check='"+$(this).attr("data-parent")+"']");if($(this).prop("checked")===false){a.prop("checked",false)}});$("#showSlots").click(function(){if($(".slot-accordion .govuk-accordion__section:hidden").length>0){$(".slot-accordion .govuk-accordion__section").show();$("#showSlots").html("Skryť")}else{$(".slot-accordion .govuk-accordion__section").slice(5).hide();$("#showSlots").html("Zobraziť ďalšie")}});var locale="sk";var error_firstName=false;var error_lastName=false;var error_phoneNumber=false;var error_email=false;var error_identificationNumber=false;var error_identificationNumberGoWith=false;var error_psc=false;var error_city=false;var error_pin=false;var error_verificationCode=false;var error_authorizationCode=false;var error_agree=false;var error_agree2=false;var error_agreeVac=false;var error_reserve=false;var error_date=false;var error_street=false;var error_streetNumber=false;var error_zip=false;var error_city_info=false;var error_year=false;var error_insurance=false;var error_expectant=false;var error_sex=false;var error_postpone=false;var error_dose2=false;$("#year").focusout(function(){validationDate();if($("#identificationType option:selected").val()==="RC"){validateDateWithID()}showEscortCheck();showMladiwarn()});$("#day").focusout(function(){validationDateChange();showEscortCheck();showMladiwarn()});$("#month").focusout(function(){validationDateChange();showEscortCheck();showMladiwarn()});$("#firstName").focusout(function(){error_firstName=validationText("#firstName","errorName",100)});$("#lastName").focusout(function(){error_lastName=validationText("#lastName","errorLastName",100)});$("#phoneNumber").focusout(function(){validationPhoneNumber()});$("#email").focusout(function(){validationEmail()});$("#identificationNumber").focusout(function(){validationID()});$("#identificationNumberGoWith").focusout(function(){validationIDGoWith()});$("#identificationTypeGoWith").change(function(){if($("#identificationNumberGoWith").val()){validationIDGoWith()}});$("#identificationType").change(function(){if($("#identificationNumber").val()){validationID();if($("input[name='formType']").val()!="true"){validateDateWithID()}}});$("#psc").focusout(function(){error_psc=validationText("#psc","errorPSC",6)});$("#city").focusout(function(){validationCity()});$("#cityInfo").focusout(function(){error_city_info=validationText("#cityInfo","errorCity",100)});$("#streetNumber").focusout(function(){error_streetNumber=validationText("#streetNumber","errorStreetNumber",100)});$("#zip").focusout(function(){error_zip=validationZip()});$("#pin").focusout(function(){error_pin=validationText("#pin","errorPin",100)});$("#verificationCode").focusout(function(){error_verificationCode=validationText("#verificationCode","errorVerificationCode",100)});$("#authorizationCode").focusout(function(){error_authorizationCode=validationText("#authorizationCode","errorAuthorizationCode",100)});$("#agree").change(function(){error_agree=validateCheckBox("#checkAgree","agree","errorAgree")});$("#agreeVac").change(function(){error_agreeVac=validateCheckBox("#checkAgreeVac","agreeVac","errorAgree")});$("#agree2").change(function(){error_agree2=validateCheckBox("#checkAgree2","agree2","errorAgree")});$("#reserve input").change(function(){error_reserve=validateCheckBox("#reserve","reserve","errorReserve")});$("#city-list").change(function(){$("#city").val($("input[name='city-radio']:checked+label").text());$("#cityId").val($("input[name='city-radio']:checked").val())});$("#insuranceList input").change(function(){validationInsurance()});$("#insurance").change(function(){$("#textVszp").toggle();$("#textIne").hide();$("#textEu").hide()});$("#insurance-2").change(function(){$("#textVszp").hide();$("#textIne").hide();$("#textEu").hide()});$("#insurance-3").change(function(){$("#textVszp").hide();$("#textIne").hide();$("#textEu").hide()});$("#insurance-4").change(function(){$("#textVszp").hide();$("#textIne").hide();$("#textEu").toggle()});$("#insurance-5").change(function(){$("#textVszp").hide();$("#textIne").toggle();$("#textEu").hide()});$("#dose2List input").change(function(){validationDose2()});$("#dose2-1").change(function(){$("#more-detail").hide()});$("#dose2-2").change(function(){$("#more-detail").hide()});$("#dose2-3").change(function(){$("#more-detail").hide()});$("#dose2-4").change(function(){$("#more-detail").toggle()});$("#goWith").change(function(){$(".sprevadzajuca-detail").toggle();$("#identificationNumberGoWith").val("")});$("#postponeList input").change(function(){validationPostpone()});function validationInsurance(){var a=$("#insuranceList");if($("input[name='insurance']:checked").val()){error_insurance=false;a.parent().removeClass("govuk-form-group--error");a.removeClass("govuk-input--error");$("#insuranceList .govuk-error-message").addClass("govuk-visually-hidden");$("#insuranceList .govuk-error-message").text("")}else{a.parent().addClass("govuk-form-group--error");a.addClass("govuk-input--error");$("#insuranceList .govuk-error-message").removeClass("govuk-visually-hidden");$("#insuranceList .govuk-error-message").text(localizedStrings.errorInsurance[locale]);error_insurance=localizedStrings.errorInsurance[locale]}}function validationSex(){var a=$("#sexList");if($("input[name='sex']:checked").val()){error_sex=false;a.parent().removeClass("govuk-form-group--error");a.removeClass("govuk-input--error");$("#sexList .govuk-error-message").addClass("govuk-visually-hidden");$("#sexList .govuk-error-message").text("")}else{a.parent().addClass("govuk-form-group--error");a.addClass("govuk-input--error");$("#sexList .govuk-error-message").removeClass("govuk-visually-hidden");$("#sexList .govuk-error-message").text(localizedStrings.errorSex[locale]);error_sex=localizedStrings.errorSex[locale]}}function validationText(e,d,a){var c=$(e);var b=c.val();if(e==="#zip"){b=b.replace(/\s+/g,"")}if(b!==""&&b.length<a){return removeErrorElem(c)}else{c.parent().addClass("govuk-form-group--error");c.addClass("govuk-input--error");c.siblings(".govuk-error-message").removeClass("govuk-visually-hidden");if(b===""){c.siblings(".govuk-error-message").text(localizedStrings[d][locale]);return localizedStrings[d][locale]}else{if(b.length>=a){c.siblings(".govuk-error-message").text(localizedStrings.errorSizeL[locale]);return localizedStrings.errorSizeL[locale]}}}}function validationZip(){var b=$("#zip");var a=b.val();var c=/^\d+$/;a=a.replace(/\s+/g,"");if(a!==""&&a.length==5&&c.test(a)){return removeErrorElem(b)}else{b.parent().addClass("govuk-form-group--error");b.addClass("govuk-input--error");b.siblings(".govuk-error-message").removeClass("govuk-visually-hidden");if(a===""){b.siblings(".govuk-error-message").text(localizedStrings.errorPSC[locale]);return localizedStrings.errorPSC[locale]}else{if(a.length!=5){b.siblings(".govuk-error-message").text(localizedStrings.errorPSCLength[locale]);return localizedStrings.errorPSCLength[locale]}else{if(!c.test(a+"")){b.siblings(".govuk-error-message").text(localizedStrings.errorPSCFormat[locale]);return localizedStrings.errorPSCFormat[locale]}}}}return false}function validationPhoneNumber(){var b=$("#phoneNumber");var a=b.val().replace(/\s/g,"");if(a!==""){if(a.startsWith("00")){a="+"+a.substring(2);b.val(a)}if(a.startsWith("0")){a="+421"+a.substring(1);b.val(a)}if(a.startsWith("9")){a="+421"+a;b.val(a)}if(a.startsWith("+421")){b.val(a)}if(a.startsWith("+421")){var c=/^\+(?:[0-9] ?){6,14}[0-9]$/;if(c.test(a)&&a.length===13){error_phoneNumber=removeErrorElem(b)}else{error_phoneNumber=addErrorElem(b,"errorFormatPhone")}}else{var c=/^\+(?:[0-9] ?){6,}$/;if(c.test(a)&&a.startsWith("+")){error_phoneNumber=removeErrorElem(b)}else{error_phoneNumber=addErrorElem(b,"errorFormatPhone")}}}else{error_phoneNumber=addErrorElem(b,"errorPhone")}}function validationEmail(){var b=$("#email");var a=b.val();const c=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;if((a||a!=="")&&a.length<100){if(c.test(a)){error_email=removeErrorElem(b)}else{error_email=addErrorElem(b,"errorFormatEmail")}}else{if($("input[name='formType']").val()=="true"&&(a||a=="")){error_email=addErrorElem(b,"errorEmail")}}}function validationCity(){var b=$("#city");var a=b.val();if(a!==""&&a.length<100){error_city=removeErrorElem(b)}else{if($("input[name='city-radio']:checked").val()){$("#city").val($("input[name='city-radio']:checked+label").text());$("#cityId").val($("input[name='city-radio']:checked").val());error_city=false}else{b.parent().addClass("govuk-form-group--error");b.addClass("govuk-input--error");b.siblings(".govuk-error-message").removeClass("govuk-visually-hidden");if(a===""){b.siblings(".govuk-error-message").text(localizedStrings.errorCity[locale]);error_city=localizedStrings.errorCity[locale]}else{if(a.length>100){b.siblings(".govuk-error-message").text(localizedStrings.errorSizeL[locale]);error_city=localizedStrings.errorSizeL[locale]}}}}}function validationID(){removeErrorElem($("#identificationNumber"));if($("#identificationType option:selected").val()==="RC"){var c=$("#identificationNumber");var a=c.val();const d=/^(\d{2})([0156]\d)(\d{2})(\d{3,4}$)/;if(a!==""){if(d.test(a)){if(a.length>9&&a%11!=0){error_identificationNumber=addErrorElem(c,"errorFormatID")}else{var b=parseDate(c);if(b>1953&&a.length==9){error_identificationNumber=addErrorElem(c,"errorFormatID")}if($("input[name='formType']").val()!="true"){validateDateWithID()}}}else{error_identificationNumber=addErrorElem(c,"errorFormatID")}}else{error_identificationNumber=addErrorElem(c,"errorID")}if(a[2]>1){$("input[name=sex][value='F']").attr("checked","checked")}else{$("input[name=sex][value='M']").attr("checked","checked")}return}if($("#identificationType option:selected").val()==="BIC"){var c=$("#identificationNumber");var a=c.val();if(a!==""){if(a[2]==="7"&&a.length===10&&a%11===0){error_identificationNumber=removeErrorElem(c)}else{error_identificationNumber=addErrorElem(c,"errorFormatBIC")}}else{error_identificationNumber=addErrorElem(c,"errorID")}return}else{var c=$("#identificationNumber");var a=c.val();if(a!==""){error_identificationNumber=removeErrorElem(c)}else{error_identificationNumber=addErrorElem(c,"errorID")}return}}function validationIDGoWith(){removeErrorElem($("#identificationNumberGoWith"));var c=$("#identificationNumberGoWith");if($("#identificationNumberGoWith").val()){if($("#identificationNumberGoWith").val()===$("#identificationNumber").val()){error_identificationNumberGoWith=addErrorElem(c,"errorIDGoWithDuplicate");return}}if($("#identificationTypeGoWith option:selected").val()==="RC"){var a=c.val();const d=/^(\d{2})([0156]\d)(\d{2})(\d{3,4}$)/;if(a!==""){if(d.test(a)){if(a.length>9&&a%11!=0){error_identificationNumberGoWith=addErrorElem(c,"errorFormatID")}else{var b=parseDateGoWith(c);if(b>1953&&a.length==9){error_identificationNumberGoWith=addErrorElem(c,"errorFormatID")}}}else{error_identificationNumberGoWith=addErrorElem(c,"errorFormatID")}}else{error_identificationNumberGoWith=addErrorElem(c,"errorIDGoWith")}return}if($("#identificationTypeGoWith option:selected").val()==="BIC"){var c=$("#identificationNumberGoWith");var a=c.val();if(a!==""){if(a[2]==="7"&&a.length===10&&a%11===0){error_identificationNumberGoWith=removeErrorElem(c)}else{error_identificationNumberGoWith=addErrorElem(c,"errorFormatBIC")}}else{error_identificationNumberGoWith=addErrorElem(c,"errorIDGoWith")}return}else{var c=$("#identificationNumberGoWith");var a=c.val();if(a!==""){error_identificationNumberGoWith=removeErrorElem(c)}else{error_identificationNumberGoWith=addErrorElem(c,"errorIDGoWith")}return}}function validationPostpone(){var a=$("#postponeList");if($("input[name='postpone']:checked").val()){error_postpone=false;a.parent().removeClass("govuk-form-group--error");a.removeClass("govuk-input--error");$("#postponeList .govuk-error-message").addClass("govuk-visually-hidden");$("#postponeList .govuk-error-message").text("")}else{a.parent().addClass("govuk-form-group--error");a.addClass("govuk-input--error");$("#postponeList .govuk-error-message").removeClass("govuk-visually-hidden");$("#postponeList .govuk-error-message").text(localizedStrings.errorPostpone[locale]);error_postpone=localizedStrings.errorPostpone[locale]}}function validationDose2(){var a=$("#dose2List");if($("input[name='dose2']:checked").val()){error_dose2=false;a.parent().removeClass("govuk-form-group--error");a.removeClass("govuk-input--error");$("#dose2List .govuk-error-message").addClass("govuk-visually-hidden");$("#dose2List .govuk-error-message").text("")}else{a.parent().addClass("govuk-form-group--error");a.addClass("govuk-input--error");$("#dose2List .govuk-error-message").removeClass("govuk-visually-hidden");$("#dose2List .govuk-error-message").text(localizedStrings.errorDose2[locale]);error_dose2=localizedStrings.errorDose2[locale]}}function getAge(){var d=$("#day").val();var c=$("#month").val();var h=$("#year").val();var g=new Date(c+"/"+d+"/"+h);var f=Date.now()-g.getTime();var a=new Date(f);var e=a.getUTCFullYear();var b=Math.abs(e-1970);return b}function parseDate(f){var c=f.val();var i=Number(c.substring(0,2));var a=Number(c.substring(2,4));var h=Number(c.substring(4,6));var e;if(c.length>9){e=i>53?i+1900:i+2000}else{e=i+1900}var g=a>50?a-50:a;var b=h;if(e>1900&&g>0&&g<13&&b>0&&b<32){$("#identificationNumber-hint").addClass("govuk-visually-hidden")}else{$("#identificationNumber-hint").removeClass("govuk-visually-hidden")}error_identificationNumber=false;$("#year").val(e);$("#month").val(g);$("#day").val(b);showEscortCheck();showMladiwarn();return e}function parseDateGoWith(f){var c=f.val();var i=Number(c.substring(0,2));var a=Number(c.substring(2,4));var h=Number(c.substring(4,6));var e;if(c.length>9){e=i>53?i+1900:i+2000}else{e=i+1900}var g=a>50?a-50:a;var b=h;if(e>1900&&g>0&&g<13&&b>0&&b<32){$("#identificationNumberGoWith-hint").addClass("govuk-visually-hidden")}else{$("#identificationNumberGoWith-hint").removeClass("govuk-visually-hidden")}error_identificationNumberGoWith=false;return e}function validateCheckBox(d,a,c){var b=$(d);if($("input[name="+a+"]").is(":checked")){b.parent().removeClass("govuk-form-group--error");b.removeClass("govuk-input--error");b.siblings(".govuk-error-message").addClass("govuk-visually-hidden");return false}else{return addErrorElem(b,c)}}function validationDateChange(){if($("#day").val()&&$("#month").val()&&$("#year").val()){validateDateWithID()}}function showEscortCheck(){if($("#day").val()&&$("#month").val()&&$("#year").val()){var a=getAge();if(a>=70){$("#showGoWith").show()}else{$("#showGoWith").hide();$(".sprevadzajuca-detail").toggle();$("#identificationNumberGoWith").val("");$("#goWith").prop("checked",false)}}}function showMladiwarn(){if($("#day").val()&&$("#month").val()&&$("#year").val()){var a=getAge();if(a<18){$("#mladiwarn").show()}else{$("#mladiwarn").hide()}}}function validationDate(){var b=$("#day").val();var a=$("#month").val();var f=$("#year").val();var d=$("#day");var c=$("#month");var e=$("#year");if($("#day").val()&&$("#month").val()&&$("#year").val()){if(b<1||b>31||a<1||a>12||f>2021||f<1900){error_date=addDateError(d,c,e,"errorDate")}else{error_date=removeDateError(d,c,e)}}else{error_date=addDateError(d,c,e,"errorDate")}}function validationIDChangeAction(){removeErrorElem($("#identificationNumber"));if($("#identificationType option:selected").val()==="RC"){var b=$("#identificationNumber");var a=b.val();const c=/^(\d{2})([0156]\d)(\d{2})(\d{3,4}$)/;if(a!==""){if(c.test(a)){if(a.length>9&&a%11!=0){error_identificationNumber=addErrorElem(b,"errorFormatID")}else{parseDate(b);if($("input[name='formType']").val()!="true"){validateDateWithID()}}}else{error_identificationNumber=addErrorElem(b,"errorFormatID")}}else{error_identificationNumber=addErrorElem(b,"errorID")}return}if($("#identificationType option:selected").val()==="BIC"){var b=$("#identificationNumber");var a=b.val();if(a!==""){if(a[2]==="7"&&a.length===10&&a%11===0){error_identificationNumber=removeErrorElem(b)}else{error_identificationNumber=addErrorElem(b,"errorFormatBIC")}}else{error_identificationNumber=addErrorElem(b,"errorID")}return}else{var b=$("#identificationNumber");var a=b.val();if(a!==""){error_identificationNumber=removeErrorElem(b)}else{error_identificationNumber=addErrorElem(b,"errorID")}return}}function addErrorElem(a,b){a.parent().addClass("govuk-form-group--error");a.addClass("govuk-input--error");a.siblings(".govuk-error-message").removeClass("govuk-visually-hidden");a.siblings(".govuk-error-message").text(localizedStrings[b][locale]);return localizedStrings[b][locale]}function submitRegistrationForm(b){error_firstName=validationText("#firstName","errorName",100);error_lastName=validationText("#lastName","errorLastName",100);error_zip=validationZip();error_city_info=validationText("#cityInfo","errorCity",100);error_streetNumber=validationText("#streetNumber","errorStreetNumber",100);validationEmail();validationID();validationPhoneNumber();validationDate();validationInsurance();validateDateWithID();var a=getAge();if(a>=70&&$("#goWith").is(":checked")){validationIDGoWith()}else{error_identificationNumberGoWith=false}validationSex();if(error_sex===false&&error_insurance===false&&error_year===false&&error_city_info===false&&error_streetNumber===false&&error_zip===false&&error_date===false&&error_firstName===false&&error_lastName===false&&error_email===false&&error_phoneNumber===false&&error_identificationNumber===false&&error_identificationNumberGoWith===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_firstName!==false){$("ul.govuk-error-summary__list").append("<li><a href='#firstName'>"+error_firstName+"</a></li>")}if(error_lastName!==false){$("ul.govuk-error-summary__list").append("<li><a href='#lastName'>"+error_lastName+"</a></li>")}if(error_email!==false){$("ul.govuk-error-summary__list").append("<li><a href='#email'>"+error_email+"</a></li>")}if(error_phoneNumber!==false){$("ul.govuk-error-summary__list").append("<li><a href='#phoneNumber'>"+error_phoneNumber+"</a></li>")}if(error_identificationNumber!==false){$("ul.govuk-error-summary__list").append("<li><a href='#identificationNumber'>"+error_identificationNumber+"</a></li>")}if(error_date!==false){$("ul.govuk-error-summary__list").append("<li><a href='#date'>"+error_date+"</a></li>")}if(error_zip!==false){$("ul.govuk-error-summary__list").append("<li><a href='#zip'>"+error_zip+"</a></li>")}if(error_street!==false){$("ul.govuk-error-summary__list").append("<li><a href='#street'>"+error_street+"</a></li>")}if(error_streetNumber!==false){$("ul.govuk-error-summary__list").append("<li><a href='#streetNumber'>"+error_streetNumber+"</a></li>")}if(error_year!==false){$("ul.govuk-error-summary__list").append("<li><a href='#date'>"+error_year+"</a></li>")}if(error_insurance!==false){$("ul.govuk-error-summary__list").append("<li><a href='#insurance'>"+error_insurance+"</a></li>")}if(error_sex!==false){$("ul.govuk-error-summary__list").append("<li><a href='#sexList'>"+error_sex+"</a></li>")}if(error_city_info!==false){$("ul.govuk-error-summary__list").append("<li><a href='#cityInfo'>"+error_city_info+"</a></li>")}if(error_identificationNumberGoWith!==false){$("ul.govuk-error-summary__list").append("<li><a href='#identificationNumberGoWith'>"+error_identificationNumberGoWith+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}}function submitCertificateForm(a){validationEmail();validationID();if(error_email===false&&error_identificationNumber===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_email!==false){$("ul.govuk-error-summary__list").append("<li><a href='#email'>"+error_email+"</a></li>")}if(error_identificationNumber!==false){$("ul.govuk-error-summary__list").append("<li><a href='#identificationNumber'>"+error_identificationNumber+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}}$("#placeForm").submit(function(){var a=$("input[type=submit]:focus").attr("name");if("submit"===a){if($("#placeForm input[type='checkbox']:checked").length>0){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");$("ul.govuk-error-summary__list").append("<li><a href='#kraje-list'>"+localizedStrings.errorKraj[locale]+"</a></li>");$("html, body").animate({scrollTop:0},"slow");return false}}});$("#expectantForm").submit(function(){var a=$("input[type=submit]:focus").attr("name");if("submit"==a){if($("#expectantForm input[type='checkbox']:checked").length>0){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");error_expectant=localizedStrings.errorExpectant[locale];$("ul.govuk-error-summary__list").append("<li><a href='#identificationNumber'>"+error_expectant+"</a></li>");$("html, body").animate({scrollTop:0},"slow");return false}return false}});$("#slotForm").submit(function(){var a=$("input[type=submit]:focus").attr("name");return a.startsWith("slot-")||"submit"===a});function submitChangeForm(a){validationIDChangeAction();error_pin=validationText("#pin","errorPin",100);if(error_identificationNumber===false&&error_pin===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_identificationNumber!==false){$("ul.govuk-error-summary__list").append("<li><a href='#identificationNumber'>"+error_identificationNumber+"</a></li>")}if(error_pin!==false){$("ul.govuk-error-summary__list").append("<li><a href='#pin'>"+error_pin+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}}$("#submitForm").submit(function(){validationIDChangeAction();error_pin=validationText("#pin","errorPin",100);if(error_identificationNumber===false&&error_authorizationCode===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_authorizationCode!==false){$("ul.govuk-error-summary__list").append("<li><a href='#authorizationCode'>"+error_authorizationCode+"</a></li>")}if(error_identificationNumber!==false){$("ul.govuk-error-summary__list").append("<li><a href='#identificationNumber'>"+error_identificationNumber+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}});$("#reservationForm").submit(function(){error_reserve=validateCheckBox("#reserve","reserve","errorReserve");if(error_reserve===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_reserve!==false){$("ul.govuk-error-summary__list").append("<li><a href='#reserve'>"+error_reserve+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}});$("#vaccinesForm").submit(function(){var a=$("input[type=submit]:focus").attr("name");if("submit"===a){if($("#vaccinesForm input[type='checkbox']:checked").length>0){if(($("#notRegisteredBox:checked").val()&&$("input[name='vaccine']:checked").val())||($("#notRegisteredBox").prop("checked")==false&&$("#regVac:checked").val())){return true}}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");$("ul.govuk-error-summary__list").append("<li><a href='#vaccinesList'>"+localizedStrings.errorVac[locale]+"</a></li>");$("html, body").animate({scrollTop:0},"slow");return false}}});$("#smsValidationForm").submit(function(){error_verificationCode=validationText("#verificationCode","errorVerificationCode",100);if(error_verificationCode===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_verificationCode!==false){$("ul.govuk-error-summary__list").append("<li><a href='#verificationCode'>"+error_verificationCode+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}});$("#smsValidationCertificateForm").submit(function(){error_verificationCode=validationText("#verificationCode","errorVerificationCode",100);if(error_verificationCode===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_verificationCode!==false){$("ul.govuk-error-summary__list").append("<li><a href='#verificationCode'>"+error_verificationCode+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}});$("#emailValidationCertificateForm").submit(function(){error_verificationCode=validationText("#verificationCode","errorVerificationCode",100);if(error_verificationCode===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_verificationCode!==false){$("ul.govuk-error-summary__list").append("<li><a href='#verificationCode'>"+error_verificationCode+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}});$("#validationForm").submit(function(){var a=$("input[type=submit]:focus").attr("name");if("submit"===a){error_agree=validateCheckBox("#checkAgree","agree","localeString");error_agree2=validateCheckBox("#checkAgree2","agree2","localeString");if($("#checkAgreeVac").length){error_agreeVac=validateCheckBox("#checkAgreeVac","agreeVac","localeString")}if(error_agree2===false&&error_agree===false&&error_agreeVac){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_agree!==false){$("ul.govuk-error-summary__list").append("<li><a href='#agree'>"+error_agree+"</a></li>")}if(error_agree2!==false){$("ul.govuk-error-summary__list").append("<li><a href='#agree2'>"+error_agree2+"</a></li>")}if(error_agreeVac!==false){$("ul.govuk-error-summary__list").append("<li><a href='#agreeVac'>"+error_agreeVac+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}}});$("#validationCertificateForm").submit(function(){var a=$("input[type=submit]:focus").attr("name");if("submit"===a){error_agree=validateCheckBox("#checkAgree","agree","localeString");error_agree2=validateCheckBox("#checkAgree2","agree2","localeString");if(error_agree2===false&&error_agree===false){return true}else{$("ul.govuk-error-summary__list").empty();$("#error-summary").removeClass("govuk-visually-hidden");if(error_agree!==false){$("ul.govuk-error-summary__list").append("<li><a href='#agree'>"+error_agree+"</a></li>")}if(error_agree2!==false){$("ul.govuk-error-summary__list").append("<li><a href='#agree2'>"+error_agree2+"</a></li>")}$("html, body").animate({scrollTop:0},"slow");return false}}});function removeDateError(b,a,c){$("#date .govuk-error-message").addClass("govuk-visually-hidden");$("#date").removeClass("govuk-form-group--error");b.removeClass("govuk-input--error");a.removeClass("govuk-input--error");c.removeClass("govuk-input--error");return false}function addDateError(b,a,d,c){$("#date").addClass("govuk-form-group--error");b.addClass("govuk-input--error");a.addClass("govuk-input--error");d.addClass("govuk-input--error");$("#date .govuk-error-message").removeClass("govuk-visually-hidden");$("#date .govuk-error-message").text(localizedStrings[c][locale]);return localizedStrings[c][locale]}function removeErrorElem(a){a.parent().removeClass("govuk-form-group--error");a.removeClass("govuk-input--error");a.siblings(".govuk-error-message").addClass("govuk-visually-hidden");return false}function validateDateWithID(){var f=$("#identificationNumber");var c=f.val();if($("#identificationType option:selected").val()==="RC"&&c!=""){f.parent().removeClass("govuk-form-group--error");f.removeClass("govuk-input--error");f.siblings(".govuk-error-message").addClass("govuk-visually-hidden");var i=Number(c.substring(0,2));var a=Number(c.substring(2,4));var h=Number(c.substring(4,6));var e;if(c.length>9){e=i>53?i+1900:i+2000}else{e=i+1900}var g=a>50?a-50:a;var b=h;if(e==$("#year").val()&&g==$("#month").val()&&b==$("#day").val()){error_identificationNumber=removeErrorElem(f);error_year=removeDateError($("#day"),$("#month"),$("#year"))}else{error_year=addDateError($("#day"),$("#month"),$("#year"),"errorYearWithID");error_identificationNumber=addErrorElem(f,"errorFormatID")}}else{error_year=removeDateError($("#day"),$("#month"),$("#year"))}};