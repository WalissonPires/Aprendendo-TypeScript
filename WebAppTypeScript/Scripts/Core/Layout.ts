export default class Layout {
    
    public bindEvents() {

        $(document).on('click', '[data-page-load]', this.handlePageLoad.bind(this));
    }

    public activeTab(tabId: string) {

        const $tabPane = $('#' + tabId);

        if ($tabPane.length === 0)
            return;

        const $tabContent = $tabPane.closest('.tab-content');
        $tabContent.find('.tab-pane.active').removeClass('active').removeClass('show');
        $tabContent.find('.nav-link.active').removeClass('active');

        const $navLink = $tabContent.find(`.nav-link[href="#${tabId}"]`);

        $navLink.addClass('active');
        $tabPane.addClass('active').addClass('show');
    }

    private handlePageLoad(e: Event) {

        const $target = $(e.target);
        const $tabPane = $($target.attr('href'));
        const tabId = $tabPane.attr('id');

        if ($tabPane.is('.content-loaded'))
            this.activeTab(tabId);
        else {

            const pageUrl = $target.attr('data-page-load');            

            $target.attr('disabled', 'disabled');

            try {

                $.ajax({
                    url: pageUrl,
                    method: 'GET'
                })
                    .done((pageHtml: string) => {

                        $tabPane.html(pageHtml);
                        $tabPane.addClass('content-loaded');
                        this.activeTab(tabId);
                    })
                    .fail(() => alert('Falha ao carregar pagina'))
                    .always(() => $target.attr('disabled', null));
            }
            catch {
                $target.attr('disabled', null)
                alert('Erro ao tentar carregar pagina');
            }
        }
    }
}