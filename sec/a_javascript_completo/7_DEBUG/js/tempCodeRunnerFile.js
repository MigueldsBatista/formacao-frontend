
try {

if (!validation()) {
  throw new Error('Validation failed');
}

}
catch (e)
{
    console.log(e);
} finally {
    console.log('This wil