define(['knockout', 'jquery', 'moment', 'js/filteredBannerData'], function(ko, $, moment) {
    "use strict";

    return {
        onLoad: function(widget) {
            widget.currentDate = moment().format("YYYYMMDD");
            widget.bannerData = ko.observableArray(filterBannerData(widget));
        },

        beforeAppear: function(page) {
            var self = this;

            function generateCarousel(tsl, blc, bac) {
                tsl = tsl ? tsl * 1000 : 4000;
                blc = blc ? blc : false;
                bac = bac ? bac : true;

                if (bac === false)
                    tsl = false;

                $('.carousel').carousel({ interval: tsl, wrap: blc });
            }

            generateCarousel(self.timeSwitchImage(), self.boolLoopCarousel(), self.boolAutoplayCarousel());
        }
    }
});