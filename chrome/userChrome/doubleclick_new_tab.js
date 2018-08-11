
(document.getElementById("tabbrowser-tabs") || gBrowser.mTabBox).addEventListener('dblclick', function (e) {
    
    if (e.button == 0 && e.originalTarget.localName == "box" )
    {
        BrowserOpenTab();
        e.preventDefault();
    }
})

