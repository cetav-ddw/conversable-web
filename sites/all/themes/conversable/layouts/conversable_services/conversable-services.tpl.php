 <?php
/**
 * @file
 * Template for One page panel layout.
 *
 * This template provides a homepage for CONVERSABLE panel display layout.
 *
 * Variables:
 * - $id: An optional CSS id to use for the layout.
 * - $content: An array of content, each item in the array is keyed to one
 *   panel of the layout. This layout supports the following sections:
 *   $content['top']: Content in the top.
 *   $content['main']: Content Teaser.
 *   $content['first_wide']: Content in the first_wide.
 *   $content['second_wide']: Content in the second_wide.
 *   $content['third_wide']: Content in the third_wide.
 *   $content['fourth_wide']: Content in the fourth_wide.
 *   $content['fifth_wide']: Content in the fifth_wide.
*    $content['bottom']: Content in the bottom.
 */
?>
<div class="" <?php if (!empty($css_id)) {print "id=\"$css_id\"";} ?>>
  <div class="">
    <div class="l-group section-wrap bg-pattern-turquoise"><?php print $content['top']; ?></div>

    <div class="sticky-menu" id="stickyMenu"><?php print $content['main']; ?></div>
    <div class="l-group section-wrap"><?php print $content['first_wide']; ?></div>

    <section id="serviceWorkshop" class="l-group section-wrap group">
        <div><?php print $content['second_wide']; ?></div>
    </section>

    <section id="serviceConsultancies" class="l-group section-wrap bg-gray">
        <div class="group"><?php print $content['third_wide']; ?></div>
    </section>

    <section id="serviceCoaching" class="l-group section-wrap">
        <div class="group">
            <?php print $content['fourth_wide']; ?>
        </div>
    </section>

    <section id="serviceRetreats" class="l-group section-wrap bg-gray">
        <div class="group">
            <div><?php print $content['fifth_wide']; ?></div>
        </div>
    </section>

    <div class="l-group section-wrap bg-gray"><?php print $content['bottom']; ?></div>

  </div>
</div>
