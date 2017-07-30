<?php

/**
 * @file
 * Implementation of hook_panels_layouts().
 */
// Plugin definition.
$plugin = array(
  'title' => t('Single column'),
  'category' => t('Conversable'),
  'icon' => 'onecol.png',
  'theme' => 'panels_onecol',
  'css' => 'onecol.css',
  'regions' => array('middle' => t('Middle column')),
);
