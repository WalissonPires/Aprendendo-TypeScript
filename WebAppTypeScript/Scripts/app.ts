import Layout from './Core/Layout';

(function () {
    'use strict';

    const layout = new Layout();

    $(document).ready(() => {

        layout.bindEvents();

        $('[href="#v-pills-home-calculator"]').click();
    });

})();
