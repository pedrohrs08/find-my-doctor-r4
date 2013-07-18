function Modal(number) {
   this.open = function () {
      this.opened = this.number || true;
   };

   this.shouldBeOpen = function () {
   	 return this.opened == (this.number || true);
   };

   this.close = function () {
     this.opened = this.number ? 0 : false;
     this.shouldBeOpen();
   };

   this.opts = {
     backdropFade: true,
     dialogFade: true
   };
};