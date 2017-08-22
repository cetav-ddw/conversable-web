<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Single Event'),
  'category' => t('Conversable'),
  'icon' => 'conversable_event.png',
  'theme' => 'conversable_event',
  'css' => 'conversable_event.css',
  'regions' => array(
    'left_above' => t('Left above'),
    'right_above' => t('Right above'),
    'bottom' => t('Bottom'),
  ),
);
