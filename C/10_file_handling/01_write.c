#include<stdio.h>
#include<conio.h>

int main()
{
	FILE *file;
	
	file = fopen("demo.txt","w");
	
//	null value chcek
	if(file ==NULL){
		printf("error null data..");
		return 1;
	}
	
	fprintf(file,"hello this demo text file");
	fclose(file);

	printf("File data printed successfully...");
	
	return 0;
}
