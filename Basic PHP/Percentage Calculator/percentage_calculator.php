<!DOCTYPE html>
<html lang="en">

	<head>

	    <meta charset="UTF-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1.0"> 

	    <link rel="icon" type="image/png" sizes="32x32" href="calc.png">

	    <title>Percentage Calculator</title>

	    <link rel="stylesheet" href="style.css">

	</head>

	<body>
		
		<div class="container mt-3">

      		<div class="row">

        		<div class="col-lg-8 col-offset-2">

          			<div class="page-header">
           				<h2>Percentage Calculator</h2>
          			</div>

          			<form method="post" name="form">

	            		<div class="form-group">
			              <label>Amount</label>
			              <input type="text" name="amount" placeholder="Enter Amount" class="form-control" value="" autocomplete="off">
			            </div>

			            <div class="form-group">
			              <label>Interest Rate</label>
			              <input type="text" name="irate" placeholder="Enter Interest Rate" class="form-control" value="" autocomplete="off">
			            </div>

			            <input type="submit" class="btn btn-primary" name="calculate" value="Calculate">
			            <br>

			            <?php
							function percentage($amount, $irate)
							{
								$result = ( $amount / 100 ) * $irate;
						?>

						<p class="text-danger mt-3"><?php echo "RESULT : " . $result; ?></p>

						<?php
							}
							if(isset($_POST['calculate']))
							{
								$amount = $_POST['amount'];
								$irate = $_POST['irate'];

								percentage($amount, $irate);
							}
						?>

	            	</form>
	            </div>
	        </div>
	    </div>
	</body>
</html>