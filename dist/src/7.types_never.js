"use strict";
/*
  never - below function is an example of never type , bydefault it will show void but
  below function intended to never return anything so its of type "never" , its a newer type
*/
// function generateError(message: string, code: number): void {
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
// never can used for utility error functions like this which never return anything
generateError("An Error Occured..!!", 500);
