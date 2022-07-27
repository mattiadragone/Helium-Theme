import '../../styles/components/component-infinite-scroll.css'

import { Ajaxinate } from 'ajaxinate';

new Ajaxinate({
    container: '#endlessLoop',
    pagination: '#endlessPagination',
    method: 'click'
  });