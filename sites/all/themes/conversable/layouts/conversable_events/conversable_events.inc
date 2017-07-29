<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Events conversable'),
  'category' => t('Conversable'),
  'icon' => 'conversable_events.png',
  'theme' => 'conversable_events',
  'css' => 'conversable_events.css',
  'regions' => array(
    'top' => t('Top'),
    'sigle_wide' => t('Sigle wide')
  ),
);
