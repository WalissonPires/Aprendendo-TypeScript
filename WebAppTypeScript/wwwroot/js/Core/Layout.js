(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Layout = /** @class */ (function () {
        function Layout() {
        }
        Layout.prototype.bindEvents = function () {
            $(document).on('click', '[data-page-load]', this.handlePageLoad.bind(this));
        };
        Layout.prototype.activeTab = function (tabId) {
            var $tabPane = $('#' + tabId);
            if ($tabPane.length === 0)
                return;
            var $tabContent = $tabPane.closest('.tab-content');
            $tabContent.find('.tab-pane.active').removeClass('active').removeClass('show');
            $tabContent.find('.nav-link.active').removeClass('active');
            var $navLink = $tabContent.find(".nav-link[href=\"#" + tabId + "\"]");
            $navLink.addClass('active');
            $tabPane.addClass('active').addClass('show');
        };
        Layout.prototype.handlePageLoad = function (e) {
            var _this = this;
            var $target = $(e.target);
            var $tabPane = $($target.attr('href'));
            var tabId = $tabPane.attr('id');
            if ($tabPane.is('.content-loaded'))
                this.activeTab(tabId);
            else {
                var pageUrl = $target.attr('data-page-load');
                $target.attr('disabled', 'disabled');
                try {
                    $.ajax({
                        url: pageUrl,
                        method: 'GET'
                    })
                        .done(function (pageHtml) {
                        $tabPane.html(pageHtml);
                        $tabPane.addClass('content-loaded');
                        _this.activeTab(tabId);
                    })
                        .fail(function () { return alert('Falha ao carregar pagina'); })
                        .always(function () { return $target.attr('disabled', null); });
                }
                catch (_a) {
                    $target.attr('disabled', null);
                    alert('Erro ao tentar carregar pagina');
                }
            }
        };
        return Layout;
    }());
    exports.default = Layout;
});
