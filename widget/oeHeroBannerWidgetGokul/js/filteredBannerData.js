function filterBannerData(wid) {
    const bannerData = [];
    for (var i = 1; i <= 6; i++) {
        bannerData.push({
            imageUrl: wid['imageURL' + i].src(),
            mobileImageUrl: wid['mobileImageURL' + i].src(),
            bannerLink: wid['bannerLink' + i](),
            startDate: wid['startDate' + i](),
            endDate: wid['endDate' + i](),
            bannerText: wid['bannerText' + i]()
        });
    }

    var filteredData = bannerData.filter(function(item) {
        if (!item.imageUrl)
            return false;

        if (!(item.startDate || item.endDate))
            return true;

        if (item.startDate && item.endDate)
            return (wid.currentDate > item.startDate && wid.currentDate < item.endDate);

        if (item.startDate)
            return (wid.currentDate > item.startDate);

        if (item.endDate)
            return (wid.currentDate < item.endDate);
    });

    return filteredData;
}